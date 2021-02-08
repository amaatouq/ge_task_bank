import React from "react";

export function TickIcon({ width = 16, className = "", color = "#344049" }) {
  return (
    <svg
      width={width}
      className={className}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.293 0.29303L15.707 1.70703L4.99997 12.414L0.292969 7.70703L1.70697 6.29303L4.99997 9.58603L14.293 0.29303Z"
        fill={color}
      />
    </svg>
  );
}
