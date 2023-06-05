import { useNode } from "@craftjs/core";
import React from "react";

function NodeWrapper({ render }) {
  const {
    isHover,
    name,
    connectors: { drag },
  } = useNode((node) => ({
    isHover: node.events.hovered,
    name: node.data.custom.displayName || node.data.displayName,
  }));

  return (
    <>
      {isHover && name != "main" ? (
        <div className=" outline outline-2 outline-blue-400 min-w-fit">{render}</div>
      ) : (
        render
      )}
    </>
  );
}

export default NodeWrapper;
