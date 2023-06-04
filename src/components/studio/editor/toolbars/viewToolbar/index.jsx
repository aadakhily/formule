import React from "react";

import PanActions from "./PanActions";
import ZoomActions from "./ZoomActions";

function ViewToolbar() {
  return (
    <div className="py-2 px-1 flex items-center bg-white shadow-xl rounded-3xl">
      <PanActions />

      <div className="w-[2px] bg-gray-300 h-5 mx-[3px]" />

      <ZoomActions />
    </div>
  );
}

export default ViewToolbar;
