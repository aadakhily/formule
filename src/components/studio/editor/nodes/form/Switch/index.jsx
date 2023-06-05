import React from "react";
import { useNode } from "@craftjs/core";
import { KdpaInput, KdpaSwitch } from "kdpa-components";

import SwitchToolBarSetting from "./SwitchToolBarSetting";

function Switch() {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <span ref={(ref) => connect(drag(ref))}>
      <KdpaSwitch />
    </span>
  );
}

Switch.craft = {
  related: {
    toolbar: SwitchToolBarSetting,
  },
};

export default Switch;
