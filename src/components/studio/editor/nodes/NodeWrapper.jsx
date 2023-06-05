import { useNode } from "@craftjs/core";
import React from "react";

const exludedNodes = ["main", "div"];

function NodeWrapper({ render }) {
  const { isHover, name, width, height } = useNode((node) => ({
    isHover: node.events.hovered,
    name: node.data.custom.displayName || node.data.displayName,
    width: node.dom?.offsetWidth,
    height: node.dom?.offsetHeight,
  }));

  return (
    <>
      {!exludedNodes.includes(name) ? (
        <div
          className={
            isHover && !exludedNodes.includes(name) ? "outline outline-2 outline-blue-400" : ""
          }
          style={{ width, height }}
        >
          {render}
        </div>
      ) : (
        render
      )}
    </>
  );
}

export default NodeWrapper;
