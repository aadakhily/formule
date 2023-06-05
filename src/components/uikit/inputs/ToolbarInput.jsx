import React from "react";

function ToolbarInput({ className, ...props }) {
  return (
    <input
      className={`outline-none bg-gray-100 text-gray-500 rounded-lg text-sm p-1 ${className || ""}`}
      {...props}
    />
  );
}

export default ToolbarInput;
