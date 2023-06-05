import React from "react";
import { useNode } from "@craftjs/core";
import { KdpaInput } from "kdpa-components";

import InputToolBarSetting from "./InputToolBarSetting";

function Input() {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <KdpaInput />
    </div>
  );
}

Input.craft = {
  related: {
    toolbar: InputToolBarSetting,
  },
};

export default Input;
