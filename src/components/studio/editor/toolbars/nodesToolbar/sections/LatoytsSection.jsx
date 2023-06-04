import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../uikit/accordion/Accordion";

import GridNodeType from "../nodeTypes/GridNodeType";
import VerticalNodeType from "../nodeTypes/VerticalNodeType";
import HorizontalNodeType from "../nodeTypes/HorizontalNodeType";
import BlankNodeType from "../nodeTypes/BlankNodeType";

function LatoytsSection() {
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

export default LatoytsSection;
