import React from "react";

const Banner = () => {
  return (
    <div className="container w-11/12 mx-auto mb-24">
      <div className="border border-[#F6F6F6] p-2 rounded-3xl">
        <div className="bg-[#9538E2] rounded-2xl pb-64 flex flex-col justify-center items-center text-center text-white py-10 space-y-10">
          <h1 className="text-5xl font-bold w-2/3">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base  w-2/4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="px-5 py-3 bg-[#FFFFFF] rounded-full text-[#9538E2] font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-[65%] mx-auto -mt-48 h-[400px] border-2 border-[#FFFFFF] p-5 rounded-3xl bg-[#FFFFFF]/30 ">
        <img
          className="rounded-3xl h-[400px] w-full"
          src="/assets/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
