import React from "react";
import Featured from "../components/Featured.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import Slide from "../components/Slide.jsx";
import CatCard from "../components/CatCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { cards, projects } from "../data.js";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      
      {/* Category Slide */}
      <div className="flex justify-center py-10">
        <div className="w-[1400px]">
          <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
              <CatCard key={card.id} card={card} />
            ))}
          </Slide>
        </div>
      </div>

      {/* Features Section (Light) */}
      <div className="bg-[#f1fdf7] flex justify-center py-[100px]">
        <div className="w-[1400px] flex items-center gap-[200px]">
          {/* First Item: flex 2 */}
          <div className="flex-[2] flex flex-col gap-[15px]">
            <h1 className="text-3xl font-medium mb-[10px] text-[#404145]">
              A whole world of freelance talent at your fingertips
            </h1>
            <div className="flex items-center gap-[10px] font-medium text-[18px] text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              The best for every budget
            </div>
            <p className="text-[18px] font-light text-gray-500 leading-[28px] tracking-[1px]">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="flex items-center gap-[10px] font-medium text-[18px] text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Quality work done quickly
            </div>
            <p className="text-[18px] font-light text-gray-500 leading-[28px] tracking-[1px]">
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="flex items-center gap-[10px] font-medium text-[18px] text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Protected payments, every time
            </div>
            <p className="text-[18px] font-light text-gray-500 leading-[28px] tracking-[1px]">
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="flex items-center gap-[10px] font-medium text-[18px] text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              24/7 support
            </div>
            <p className="text-[18px] font-light text-gray-500 leading-[28px] tracking-[1px]">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          {/* Second Item: flex 3 */}
          <div className="flex-[3]">
            <video src="./img/video.mp4" controls className="w-[720px]" />
          </div>
        </div>
      </div>

      {/* Explore Marketplace */}
      <div className="flex justify-center py-[100px]">
        <div className="w-[1400px]">
          <h1 className="text-3xl font-bold text-[#555] mb-12">Explore the marketplace</h1>
          <div className="flex flex-wrap justify-between">
            {[
              { name: "Graphics & Design", icon: "graphics-design" },
              { name: "Digital Marketing", icon: "online-marketing" },
              { name: "Writing & Translation", icon: "writing-translation" },
              { name: "Video & Animation", icon: "video-animation" },
              { name: "Music & Audio", icon: "music-audio" },
              { name: "Programming & Tech", icon: "programming" },
              { name: "Business", icon: "business" },
              { name: "Lifestyle", icon: "lifestyle" },
              { name: "Data", icon: "data" },
              { name: "Photography", icon: "photography" },
            ].map((cat, index) => (
              <div key={index} className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-[10px] text-center cursor-pointer group">
                <img 
                  src={`https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/${cat.icon}.svg`} 
                  alt="" 
                  className="w-[50px] h-[50px]"
                />
                <div className="w-[50px] h-[2px] bg-lightgray transition-all duration-300 ease group-hover:w-[80px] group-hover:bg-[#1dbf73]" />
                <span className="font-light">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Dark (Fiverr Business) */}
      <div className="bg-[#0d084d] flex justify-center py-[100px] text-white">
        <div className="w-[1400px] flex items-center gap-[200px]">
          <div className="flex-[2] flex flex-col gap-[15px]">
            <h1 className="text-2xl font-medium mb-[10px] !text-white">fiverr <i className="font-light">business</i></h1>
            <h1 className="text-4xl font-medium mb-[10px] !text-white">A business solution designed for <i className="font-light">teams</i></h1>
            <p className="text-[18px] font-light leading-[28px] tracking-[1px] mb-[20px] !text-white">
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="flex flex-col gap-[15px]">
              {[
                "Connect to freelancers with proven business experience",
                "Get matched with the perfect talent by a customer success manager",
                "Manage teamwork and boost productivity with one powerful workspace"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-[10px] !font-light !text-[14px] !text-white">
                  <img src="./img/check.png" alt="" className="w-6 h-6" />
                  {text}
                </div>
              ))}
            </div>
            <button className="bg-[#1dbf73] text-white border-none py-[10px] px-[20px] rounded-[5px] w-max text-[16px] cursor-pointer mt-[20px]">
              Explore Fiverr Business
            </button>
          </div>
          <div className="flex-[3]">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Project Slide */}
      <div className="flex justify-center py-[100px]">
        <div className="w-[1400px]">
          <Slide slidesToShow={4} arrowsScroll={4}>
            {projects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Home;