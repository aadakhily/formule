import React from "react";
import { useEditor } from "@craftjs/core";

import Text from "../../nodes/text/Text";
import SideBar from "../../../layout/SideBar";
import LatoytsSection from "./sections/LatoytsSection";
import { AccordionRoot } from "../../../../uikit/accordion/Accordion";

function NodesToolbar() {
  return (
    <SideBar>
      <AccordionRoot type="single" collapsible>
        <LatoytsSection />
      </AccordionRoot>
    </SideBar>
  );
}

export default NodesToolbar;
