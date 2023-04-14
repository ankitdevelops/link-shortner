import React from "react";

const ProductInfo = () => {
  return (
    <div className="my-24 flex flex-col items-center gap-10 sm:flex-row sm:justify-between ">
      <div className="left_section sm:text-left sm:w-1/2">
        <img
          src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/globe.png"
          alt="globle_img"
        />
      </div>
      <div className="right_section sm:text-clip sm:w-1/2 ">
        <ul className=" flex flex-col gap-5 divide-y divide-slate-500">
          <li className="flex gap-3 item-center text-xl sm:text-3xl  ">
            <span className="font-black text-2xl">500K</span>{" "}
            <p>global paying customers</p>
          </li>
          <li className="flex gap-3 item-center text-xl sm:text-3xl ">
            <span className="font-black text-2xl">5.7M</span>{" "}
            <p>monthly active users</p>
          </li>
          <li className="flex gap-3 item-center text-xl sm:text-3xl ">
            <span className="font-black text-2xl">260M</span>{" "}
            <p>links & QR codes created monthly</p>
          </li>
          <li className="flex gap-3 item-center text-xl sm:text-3xl ">
            <span className="font-black text-2xl">10B</span>
            <p>connections (clicks & scans) monthly</p>
          </li>
          <li className="flex gap-3 item-center text-xl sm:text-3xl ">
            <span className="font-black text-2xl">800+</span>{" "}
            <p>app integrations</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
