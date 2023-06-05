import React from "react";
import BaseNode from "../BaseNode";
import { RadiobuttonIcon } from "@radix-ui/react-icons";
import Radio from "../../../../nodes/form/Radio/index";

function RadioNodeType() {
  return (
    <BaseNode Node={Radio}>
      <RadiobuttonIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Radio</span>
    </BaseNode>
  );
}

export default RadioNodeType;
