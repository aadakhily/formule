import React from "react";
import { useNode } from "@craftjs/core";
import { KdpaCheckBox } from "kdpa-components";

import InputToolBarSetting from "./CheckBoxToolBarSetting";

function CheckBox() {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <span ref={(ref) => connect(drag(ref))}>
      <KdpaCheckBox />
    </span>
  );
}

CheckBox.craft = {
  related: {
    toolbar: InputToolBarSetting,
  },
};

export default CheckBox;
