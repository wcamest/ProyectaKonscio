import React from "react";

type Props = {};

const CSSSectionBorderIcon = (props: Props) => {
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
        id="border"
        x="0"
        y="0"
        width="16"
        height="16"
        style={{ fill: "none" }}
      />
      <g id="border1">
        <rect x="5" y="5" width="9" height="9" />
        <rect x="2" y="5" width="2" height="9" />
        <rect x="5" y="2" width="9" height="2" />
      </g>
    </svg>
  );
};

export default CSSSectionBorderIcon;
