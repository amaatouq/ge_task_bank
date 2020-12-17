import React from "react";

export function Alert({ oNclose, children }) {
  return (
    <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
      <div className="inline-block align-middle mr-8">{children}</div>
      <button
        onClick={oNclose}
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      >
        <span>×</span>
      </button>
    </div>
  );
}
