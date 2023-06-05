import React from "react";
import { useNode } from "@craftjs/core";
import { KdpaRadio } from "kdpa-components";

import RadioToolBarSetting from "./RadioToolBarSetting";

function Radio() {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <span ref={(ref) => connect(drag(ref))}>
      <KdpaRadio />
    </span>
  );
}

Radio.craft = {
  related: {
    toolbar: RadioToolBarSetting,
  },
};

export default Radio;
