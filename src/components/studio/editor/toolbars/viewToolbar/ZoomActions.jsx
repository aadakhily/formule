import { ResetIcon, ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";
import React from "react";
import { useControls } from "react-zoom-pan-pinch";

function ZoomActions() {
  const { instance, zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <>
      <button
        onClick={() => zoomIn()}
        className="flex items-center justify-center bg-gray-100 rounded-xl mx-[6px] text-gray-700 w-8 h-8 hover:text-gray-900 hover:bg-gray-200"
      >
        <ZoomInIcon width={18} height={18} />
      </button>
      <button
        onClick={() => zoomOut()}
        className="flex items-center justify-center bg-gray-100 rounded-xl mx-[6px] text-gray-700 w-8 h-8 hover:text-gray-900 hover:bg-gray-200"
      >
        <ZoomOutIcon width={18} height={18} />
      </button>
      <button
        onClick={() => resetTransform()}
        className="flex items-center justify-center bg-gray-100 rounded-xl mx-[6px] text-gray-700 w-8 h-8 hover:text-gray-900 hover:bg-gray-200"
      >
        <ResetIcon width={18} height={18} />
      </button>
    </>
  );
}

export default ZoomActions;
