import { useNode } from "@craftjs/core";
import React from "react";

function BlankLayout() {
  const {
    connectors: { drag, connect },
  } = useNode();
  return (
    <div
      className="bg-white p-20"
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => console.log("this clicked")}
    >
      BlankLayout
    </div>
  );
}

export default BlankLayout;
