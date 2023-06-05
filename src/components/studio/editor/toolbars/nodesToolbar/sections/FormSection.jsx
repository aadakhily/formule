import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../uikit/accordion/Accordion";

function FormSection() {
  return (
    <AccordionItem value="form-section">
      <AccordionTrigger>Form</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-3">something</div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default FormSection;
