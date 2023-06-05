import React from "react";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../../../../uikit/accordion/Accordion";

import InputNodeType from "../nodeTypes/form/InputNodeType";
import CheckBoxNodeType from "../nodeTypes/form/CheckBoxNodeType";
import RadioNodeType from "../nodeTypes/form/RadioNodeType";
import SwitchNodeType from "../nodeTypes/form/SwitchNodeType";

function FormSection() {
  return (
    <AccordionItem value="form-section">
      <AccordionTrigger>Form</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-3">
          <InputNodeType />
          <CheckBoxNodeType />
          <RadioNodeType />
          <SwitchNodeType />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default FormSection;
