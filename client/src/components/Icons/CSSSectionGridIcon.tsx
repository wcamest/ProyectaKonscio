import React from "react";

type Props = {};

const CSSSectionGridIcon = (props: Props) => {
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
        id="grid"
        x="0"
        y="0"
        width="16"
        height="16"
        style={{ fill: "none" }}
      />
      <g id="grid">
        <rect x="11" y="1" width="4" height="4" />
        <rect x="1" y="1" width="9" height="9" />
        <rect x="11" y="6" width="4" height="9" />
        <rect x="1" y="11" width="9" height="4" />
      </g>
    </svg>
  );
};

export default CSSSectionGridIcon;
