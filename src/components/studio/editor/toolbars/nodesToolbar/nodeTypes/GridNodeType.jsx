import React from "react";
import BaseNode from "./BaseNode";
import { GridIcon } from "@radix-ui/react-icons";

function GridNodeType() {
  return (
    <BaseNode>
      <GridIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">grid</span>
    </BaseNode>
  );
}

export default GridNodeType;
