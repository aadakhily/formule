import React from "react";
import { useEditor } from "@craftjs/core";

import SideBar from "../../../layout/SideBar";
import LayoutsSection from "./sections/LayoutsSection";
import { AccordionRoot } from "../../../../uikit/accordion/Accordion";
import FormSection from "./sections/FormSection";

function NodesToolbar() {
  return (
    <SideBar>
      <AccordionRoot type="single" defaultValue="layout-section" collapsible>
        <LayoutsSection />
        <FormSection />
      </AccordionRoot>
    </SideBar>
  );
}

export default NodesToolbar;
