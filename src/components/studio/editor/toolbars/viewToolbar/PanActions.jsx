import { CursorArrowIcon, HandIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";

function CursorActions() {
  const [isPaning, setIsPaning] = useState();
  const { instance } = useControls();

  useEffect(() => {
    const mainFrame = document.querySelector("#mainFrame");
    isPaning ? mainFrame.classList.add("cursor-grab") : mainFrame.classList.remove("cursor-grab");
  }, [isPaning]);

  function changeToPaning() {
    instance.setKeyPressed({ key: " " });
    setIsPaning(true);
  }

  function changeToSelecting() {
    instance.setKeyUnPressed({ key: " " });
    setIsPaning(false);
  }

  return (
    <>
      <button
        onClick={changeToPaning}
        className={`flex items-center justify-center bg-gray-100 rounded-xl mx-[6px] text-gray-700 w-8 h-8 hover:text-gray-900 hover:bg-gray-200 ${
          isPaning ? "!bg-gray-600 !text-gray-50" : ""
        }`}
      >
        <HandIcon width={16} height={16} />
      </button>

      <button
        onClick={changeToSelecting}
        className={`flex items-center justify-center bg-gray-100 rounded-xl mx-[6px] text-gray-700 w-8 h-8 hover:text-gray-900 hover:bg-gray-200 ${
          !isPaning ? "!bg-gray-600 !text-gray-50" : ""
        }`}
      >
        <CursorArrowIcon width={16} height={16} />
      </button>
    </>
  );
}

export default CursorActions;
