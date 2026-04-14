import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../utils/newRequest.js";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    // Outer Wrapper: .review
    <div className="flex flex-col gap-5 my-5">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        /* User Section: .user */
        <div className="flex items-center gap-4">
          <img
            className="h-[50px] w-[50px] rounded-full object-cover"
            src={data.img || "/img/noavatar.jpg"}
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-medium">{data.username}</span>
            {/* Country Section: .country */}
            <div className="flex items-center gap-2.5 text-gray-500">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}

      {/* Stars Section: .stars */}
      <div className="flex gap-[5px]">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img 
              src="/img/star.png" 
              alt="star" 
              key={i} 
              className="h-[14px] w-[14px]" 
            />
          ))}
        <span className="text-sm font-bold text-[#ffc108]">
          {review.star}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed">{review.desc}</p>

      {/* Helpful Section: .helpful */}
      <div className="flex items-center gap-2.5 text-sm">
        <span className="font-semibold">Helpful?</span>
        <img src="/img/like.png" alt="like" className="w-[14px] cursor-pointer" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="dislike" className="w-[14px] cursor-pointer" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;