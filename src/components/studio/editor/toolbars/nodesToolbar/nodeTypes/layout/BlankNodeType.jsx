import React from "react";
import BaseNode from "../BaseNode";
import { BoxIcon } from "@radix-ui/react-icons";
import BlankLayout from "../../../../nodes/layouts/BlankLayout";

function BlankNodeType() {
  return (
    <BaseNode Node={BlankLayout}>
      <BoxIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Blank</span>
    </BaseNode>
  );
}

export default BlankNodeType;
