import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import plusIcon from '@/assets/icons/plus-icon.svg';
import minusIcon from '@/assets/icons/minus-icon.svg';

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        'border-b border-[#D4D4D4] last:border-b-0 transition-colors duration-200',
        'data-[state=open]:bg-[#23938B] data-[state=open]:text-white',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
          'group', // Add group class for styling children
          className
        )}
        {...props}
      >
        <span className="group-data-[state=open]:text-white">{children}</span>
        <div className="relative size-4 shrink-0 translate-y-0.5">
          <img
            src={plusIcon}
            alt="Expand"
            className="absolute transition-all duration-200 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-0 top-[50%] right-5"
          />
          <img
            src={minusIcon}
            alt="Collapse"
            className="absolute transition-all duration-200 group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-0 text-white top-[100%] right-5"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
