import React from "react";

type Props = {};

const ScreenSMIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      viewBox="0 0 30 30"
    >
      <rect
        id="sm"
        x="0"
        y="0"
        width="30"
        height="30"
        style={{ fill: "none" }}
      />
      <g id="sm1">
        <path d="M21,4.5l0,21c0,0.828 -0.672,1.5 -1.5,1.5l-9,0c-0.828,0 -1.5,-0.672 -1.5,-1.5l0,-21c0,-0.828 0.672,-1.5 1.5,-1.5l9,0c0.828,0 1.5,0.672 1.5,1.5Zm-0.75,0.75c0,-0.828 -0.672,-1.5 -1.5,-1.5l-7.5,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,17.25c0,0.828 0.672,1.5 1.5,1.5l7.5,0c0.828,0 1.5,-0.672 1.5,-1.5l0,-17.25Zm-5.25,19.5c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75Z" />
      </g>
    </svg>
  );
};

export default ScreenSMIcon;
