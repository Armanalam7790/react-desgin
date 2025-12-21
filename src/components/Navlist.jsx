import React from "react";

const Navlist = () => {
  return (
    <div className="flex items-center gap-4">
      <a className="bg-[#1D1D1D] px-2 py-2 text-md rounded" href="">
        DESIGNERS
      </a>
      <a className="bg-[#1D1D1D] px-2 py-2 text-md rounded" href="">
        COLLABS
      </a>
      <a className="bg-[#1D1D1D] px-2 py-2 text-md rounded" href="">
        EVENTS
      </a>
      <a className="bg-[#1D1D1D] px-2 py-2 text-md rounded" href="">
        BLOG
      </a>
      <a className="bg-[#1D1D1D] px-2 py-2 text-md rounded" href="">
        CARD
      </a>
      <a className="bg-red-500 px-2 py-2 text-md rounded" href="">
        Get IN TOUCH
      </a>
    </div>
  );
};

export default Navlist;
