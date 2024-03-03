import React from "react";
import Button from "./Button";

const buttonList = ["All", "Music", "Sitcoms", "Lo-fi", "Live", "Gaming", "Cookies", "Podcasts", "History"];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
