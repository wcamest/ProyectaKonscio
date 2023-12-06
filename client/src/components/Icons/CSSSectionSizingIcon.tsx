import React from "react";

type Props = {};

const CSSSectionSizingIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-card-image"
      viewBox="0 0 16 16"
    >
      <rect
        id="sizing"
        x="0"
        y="0"
        width="16"
        height="16"
        style={{ fill: "none" }}
      />
      <g id="sizing1">
        <path d="M10.5,1.5l-9,0l0,9l3,0l0,-2l3,0l-0,2l3,0l0,-3l-2,0l0,-3l2,0l0,-3Z" />
        <path d="M12.5,5.5l0,-1l2,1.5l-2,1.5l0,-1l-3,0l0,-1l3,0Z" />
        <path d="M6.5,12.5l1,0l-1.5,2l-1.5,-2l1,0l0,-3l1,0l0,3Z" />
      </g>
    </svg>
  );
};

export default CSSSectionSizingIcon;
