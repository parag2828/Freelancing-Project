import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="no-underline text-inherit">
      {/* Container: .gigCard */}
      <div className="w-[324px] h-[400px] border border-[#e4e4e4] mb-[40px] flex flex-col">
        
        {/* Cover Image */}
        <img 
          src={item.cover} 
          alt="" 
          className="w-full h-1/2 object-cover" 
        />

        {/* Info Section: .info */}
        <div className="py-[10px] px-[20px] flex flex-col gap-[20px]">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            /* User Section: .user */
            <div className="flex items-center gap-[10px]">
              <img 
                src={data.img || "/img/noavatar.jpg"} 
                alt="" 
                className="w-[26px] h-[26px] rounded-full object-cover"
              />
              <span className="text-sm">{data.username}</span>
            </div>
          )}
          
          <p className="text-[#111] line-clamp-2">{item.desc}</p>

          {/* Star Rating: .star */}
          <div className="flex items-center gap-[5px]">
            <img src="./img/star.png" alt="" className="w-[14px] h-[14px]" />
            <span className="text-[14px] font-bold text-[#ffc108]">
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>

        {/* Divider: hr */}
        <hr className="h-0 border-t-[0.5px] border-[#e4e4e4] mt-auto" />

        {/* Detail Section: .detail */}
        <div className="py-[10px] px-[20px] flex items-center justify-between">
          <img 
            src="./img/heart.png" 
            alt="" 
            className="w-[16px] h-[16px] cursor-pointer object-cover"
          />
          <div className="flex flex-col items-end">
            <span className="text-[#999] text-[12px]">STARTING AT</span>
            <h2 className="text-[#555] text-[18px] font-normal">
              $ {item.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;