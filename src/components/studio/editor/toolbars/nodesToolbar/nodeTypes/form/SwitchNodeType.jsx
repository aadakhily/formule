import React from "react";
import BaseNode from "../BaseNode";
import { SwitchIcon } from "@radix-ui/react-icons";
import Switch from "../../../../nodes/form/Switch/index";

function SwitchNodeType() {
  return (
    <BaseNode Node={Switch}>
      <SwitchIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Switch</span>
    </BaseNode>
  );
}

export default SwitchNodeType;
