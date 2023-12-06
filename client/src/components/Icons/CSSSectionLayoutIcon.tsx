import React from "react";

type Props = {};

const CSSSectionLayoutIcon = (props: Props) => {
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
        id="layout"
        x="0"
        y="0"
        width="16"
        height="16"
        style={{ fill: "none" }}
      />
      <g id="layout1">
        <path d="M7,1l-6,-0l0,6l3,-0l0,-3l3,0l0,-3Z" />
        <path d="M11,5l-6,0l0,6l3,-0l0,-3l3,-0l0,-3Z" />
        <rect x="9" y="9" width="6" height="6" />
      </g>
    </svg>
  );
};

export default CSSSectionLayoutIcon;
