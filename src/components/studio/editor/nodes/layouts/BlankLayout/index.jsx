import React from "react";
import { Element, useNode } from "@craftjs/core";

import BlankLayoutToolBarSetting from "./BlankLayoutToolBarSetting";

function BlankLayout({ children, width, height }) {
  const {
    id,
    connectors: { drag, connect },
  } = useNode();
  return (
    <div className="bg-white p-4" style={{ width, height }} ref={(ref) => connect(drag(ref))}>
      <Element is="div" id={id} canvas className="w-full h-full">
        {children}
      </Element>
    </div>
  );
}

BlankLayout.craft = {
  props: {
    width: "800px",
    height: "900px",
  },
  rules: {},
  related: {
    toolbar: BlankLayoutToolBarSetting,
  },
};

export default BlankLayout;
