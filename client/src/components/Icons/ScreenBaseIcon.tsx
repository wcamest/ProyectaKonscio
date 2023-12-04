import React from "react";

type Props = {};

const ScreenBaseIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      viewBox="0 0 30 30"
    >
      <rect
        id="base"
        x="0"
        y="0"
        width="30"
        height="30"
        style={{ fill: "none" }}
      />
      <g id="base1">
        <path d="M22.425,7.575c4.097,4.098 4.097,10.752 -0,14.85c-4.098,4.097 -10.752,4.097 -14.85,-0c-4.097,-4.098 -4.097,-10.752 0,-14.85c4.098,-4.097 10.752,-4.097 14.85,0Zm-3.293,1.172c-2.859,-1.858 -6.77,-1.497 -9.326,1.059c-2.556,2.556 -2.917,6.467 -1.059,9.326l10.385,-10.385Zm-8.264,12.506c2.859,1.858 6.77,1.497 9.326,-1.059c2.556,-2.556 2.917,-6.467 1.059,-9.326l-10.385,10.385Z" />
      </g>
    </svg>
  );
};

export default ScreenBaseIcon;
