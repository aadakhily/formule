import React from "react";
import ToolbarInput from "../../../../../uikit/inputs/ToolbarInput";
import { useNode } from "@craftjs/core";

function BlankLayoutToolBarSetting() {
  const { setProp, width, height } = useNode((state) => ({
    width: state.data.props.width,
    height: state.data.props.height,
  }));

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h5 className="text-sm font-bold">Size</h5>
        <div className="flex items-center p-2">
          <div className="flex items-center mr-2">
            <label htmlFor="sizeWidth" className="text-xs font-semibold mr-2">
              Width :
            </label>
            <ToolbarInput
              defaultValue={width}
              id="sizeWidth"
              type="text"
              className="w-14"
              onBlur={(e) => setProp((props) => (props.width = e.target.value))}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="sizeWidth" className="text-xs font-semibold mr-2">
              Height :
            </label>
            <ToolbarInput
              defaultValue={height}
              id="sizeWidth"
              type="text"
              className="w-14"
              onBlur={(e) => setProp((props) => (props.height = e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlankLayoutToolBarSetting;
