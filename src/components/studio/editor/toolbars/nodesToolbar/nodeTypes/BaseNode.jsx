import { useEditor } from "@craftjs/core";
import React from "react";

function BaseNode({ children, Node }) {
  const {
    connectors: { create },
  } = useEditor();
  return (
    <div
      ref={(ref) => create(ref, <Node />)}
      className="py-5 flex flex-col items-center justify-center bg-gray-50 rounded-lg cursor-grab transition-all duration-200 hover:bg-gray-200 hover:translate-x-[2px] hover:-translate-y-[2px]"
    >
      {children}
    </div>
  );
}

export default BaseNode;
