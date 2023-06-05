import React from "react";
import BaseNode from "../BaseNode";
import { CheckboxIcon, InputIcon } from "@radix-ui/react-icons";
import CheckBox from "../../../../nodes/form/CheckBox/index";

function CheckBoxNodeType() {
  return (
    <BaseNode Node={CheckBox}>
      <CheckboxIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">CheckBox</span>
    </BaseNode>
  );
}

export default CheckBoxNodeType;
