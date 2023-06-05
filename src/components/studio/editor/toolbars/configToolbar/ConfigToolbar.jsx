import React from "react";

import SideBar from "../../../layout/SideBar";
import { Layers } from "@craftjs/layers";
import { useEditor } from "@craftjs/core";

function ConfigToolbar() {
  const { active, related } = useEditor((state, query) => {
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  return (
    <SideBar>
      <div className="min-h-[65%] border-b-2 border-b-gray-300">
        {active && related.toolbar && React.createElement(related.toolbar)}
      </div>
      <Layers expandRootOnLoad />
    </SideBar>
  );
}

export default ConfigToolbar;
