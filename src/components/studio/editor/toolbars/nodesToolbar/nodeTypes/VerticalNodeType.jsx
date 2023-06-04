import React from "react";
import BaseNode from "./BaseNode";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import BlankLayout from "../../../nodes/layouts/BlankLayout";

function VerticalNodeType() {
  return (
    <BaseNode Node={BlankLayout}>
      <ViewVerticalIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Vertical</span>
    </BaseNode>
  );
}

export default VerticalNodeType;
