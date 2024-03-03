import React from "react";
import { HAMBURGER_ICON, LOGO, USER_ICON } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../utils/slices/appslice";

const Head = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8 cursor-pointer" alt="menu" src={HAMBURGER_ICON} onClick={() => dispatch(toggleSideNav())} />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={LOGO} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
