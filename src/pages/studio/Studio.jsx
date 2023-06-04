import { Editor, Element, Frame } from "@craftjs/core";
import PerfectScrollbar from "react-perfect-scrollbar";

// layout
import Header from "../../components/studio/layout/Header";
import NodesToolbar from "../../components/studio/editor/toolbars/nodesToolbar/NodesToolbar";
import ConfigToolbar from "../../components/studio/editor/toolbars/ConfigToolbar/ConfigToolbar";
import { EDITOR_NODES } from "../../components/studio/editor/nodes";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ViewToolbar from "../../components/studio/editor/toolbars/viewToolbar";

function Studio() {
  const data = localStorage.getItem("data");

  return (
    <Editor resolver={EDITOR_NODES}>
      <div>
        <Header />

        <div className="flex justify-between">
          <NodesToolbar />

          <div id="mainFrame" className="w-full overflow-auto bg-gray-200 relative">
            <TransformWrapper
              minScale={0.05}
              wheel={{ activationKeys: ["Control"] }}
              panning={{ activationKeys: [" "] }}
            >
              <TransformComponent contentStyle={{ width: "100%" }} wrapperStyle={{ width: "100%" }}>
                <Frame data={data}>
                  <Element
                    canvas
                    is="main"
                    className="w-full h-[92vh] p-20 text-center text-2xl capitalize cursor-grab pointer-events-none"
                  >
                    for start , drag a layout and drop here
                  </Element>
                </Frame>
              </TransformComponent>

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
                <ViewToolbar />
              </div>
            </TransformWrapper>
          </div>

          <ConfigToolbar />
        </div>
      </div>
    </Editor>
  );
}

export default Studio;
