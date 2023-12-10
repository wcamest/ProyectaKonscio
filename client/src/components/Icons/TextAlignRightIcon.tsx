import React from "react";

type Props = {};

const TextAlignRightIcon = (props: Props) => {
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
      <g id="text-align-right">
        <rect x="4.8" y="2.4" width="9.6" height="1.6" />
        <rect x="1.6" y="5.6" width="12.8" height="1.6" />
        <rect x="8" y="8.8" width="6.4" height="1.6" />
        <rect x="4.8" y="12" width="9.6" height="1.6" />
      </g>
    </svg>
  );
};

export default TextAlignRightIcon;
