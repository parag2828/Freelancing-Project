import React, { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="w-[360px] py-[100px] px-0 flex flex-col gap-[20px]"
      >
        <h1 className="text-gray-500 mb-[20px] text-3xl font-bold">Sign in</h1>
        
        <label className="text-gray-500 text-[18px]">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          className="p-[20px] border border-[rgb(216,214,214)] outline-none rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-gray-500 text-[18px]">Password</label>
        <input
          name="password"
          type="password"
          className="p-[20px] border border-[rgb(216,214,214)] outline-none rounded-sm"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          type="submit"
          className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer rounded-sm hover:bg-[#19a463] transition-colors"
        >
          Login
        </button>
        
        {error && <span className="text-red-500 text-[12px]">{error}</span>}
      </form>
    </div>
  );
}

export default Login;