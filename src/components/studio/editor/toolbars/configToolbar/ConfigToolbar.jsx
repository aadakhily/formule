import React from "react";

import SideBar from "../../../layout/SideBar";
import { Layers } from "@craftjs/layers";

function ConfigToolbar() {
  return (
    <SideBar>
      <Layers expandRootOnLoad />
    </SideBar>
  );
}

export default ConfigToolbar;
