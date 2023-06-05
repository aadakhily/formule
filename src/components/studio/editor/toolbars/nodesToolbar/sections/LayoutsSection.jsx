import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../uikit/accordion/Accordion";

import GridNodeType from "../nodeTypes/layout/GridNodeType";
import VerticalNodeType from "../nodeTypes/layout/VerticalNodeType";
import HorizontalNodeType from "../nodeTypes/layout/HorizontalNodeType";
import BlankNodeType from "../nodeTypes/layout/BlankNodeType";

function LayoutsSection() {
  return (
    <AccordionItem value="layout-section">
      <AccordionTrigger>Layouts</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-3">
          <BlankNodeType />
          <VerticalNodeType />
          <HorizontalNodeType />
          <GridNodeType />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default LayoutsSection;
