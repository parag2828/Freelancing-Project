import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
    e.target[0].value = ""; // Clear input after submission
  };

  return (
    // Outer Wrapper: .reviews
    <div className="mt-[50px]">
      <h2 className="text-2xl font-bold mb-5">Reviews</h2>
      
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}

      {/* Add Review Section: .add */}
      <div className="mt-[20px] flex flex-col gap-[20px]">
        <h3 className="text-lg font-semibold">Add a review</h3>
        
        {/* Form: .addForm */}
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="write your opinion" 
            className="p-[20px] border border-gray-300 rounded-md outline-none"
          />
          
          <select 
            name="" 
            id="" 
            className="w-[200px] p-[20px] self-end border border-gray-300 rounded-md outline-none"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          
          <button className="self-end w-[100px] border-none p-[10px] text-white bg-[#1dbf73] cursor-pointer font-medium hover:bg-[#19a463] transition-colors">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;