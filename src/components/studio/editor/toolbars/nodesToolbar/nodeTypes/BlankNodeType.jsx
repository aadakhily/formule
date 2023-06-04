import React from "react";
import BaseNode from "./BaseNode";
import { BoxIcon } from "@radix-ui/react-icons";

function BlankNodeType() {
  return (
    <BaseNode>
      <BoxIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Blank</span>
    </BaseNode>
  );
}

export default BlankNodeType;
