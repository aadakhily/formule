import { useNode } from "@craftjs/core";
import React from "react";

const exludedNodes = ["main", "div"];

function NodeWrapper({ render }) {
  const { isHover, name } = useNode((node) => ({
    isHover: node.events.hovered,
    name: node.data.custom.displayName || node.data.displayName,
  }));

  return (
    <>
      {isHover && !exludedNodes.includes(name) ? (
        <div className=" outline outline-2 outline-blue-400 w-fit">{render}</div>
      ) : (
        render
      )}
    </>
  );
}

export default NodeWrapper;
