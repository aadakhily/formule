import React from "react";
import BaseNode from "./BaseNode";
import { ViewHorizontalIcon } from "@radix-ui/react-icons";
import BlankLayout from "../../../nodes/layouts/BlankLayout";

function HorizontalNodeType() {
  return (
    <BaseNode Node={BlankLayout}>
      <ViewHorizontalIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Horizontal</span>
    </BaseNode>
  );
}

export default HorizontalNodeType;
