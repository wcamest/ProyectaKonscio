import React from 'react'

type Props = {}

const CSSSectionSpacingIcon = (props: Props) => {
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
        id="spacing"
        x="0"
        y="0"
        width="16"
        height="16"
        style={{ fill: "none" }}
      />
      <g id="spacing1">
        <path d="M13,7.5l0,-1l2,1.5l-2,1.5l0,-1l-2,0l0,-1l2,0Z"/>
        <path d="M3,7.5l0,-1l-2,1.5l2,1.5l0,-1l2,0l0,-1l-2,0Z"/>
        <rect x="6" y="1" width="1" height="14"/>
        <rect x="9" y="1" width="1" height="14"/>
    </g>
    </svg>
  )
}

export default CSSSectionSpacingIcon