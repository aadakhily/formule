import React from "react";
import BaseNode from "../BaseNode";
import { InputIcon } from "@radix-ui/react-icons";
import Input from "../../../../nodes/form/Input/index";
// import BlankLayout from "../../../nodes/layouts/BlankLayout";

function InputNodeType() {
  return (
    <BaseNode Node={Input}>
      <InputIcon width={35} height={35} className="text-gray-500" />
      <span className="text-xs font-semibold text-gray-500 mt-2">Input</span>
    </BaseNode>
  );
}

export default InputNodeType;
