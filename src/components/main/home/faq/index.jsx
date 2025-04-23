import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQ() {
  return (
    <div className="p-16 sm:p-20 lg:p-24 xl:p-28 2xl:p-32">
      <div className="flex flex-col gap-16 max-w-[70%] w-full mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[44px] sm:text-[48px] lg:text-[52px] xl:text-[56px] font-medium capitalize text-[#10423E]">
            frequently asked questions
          </h1>
          <p className="text-base leading-[26px] text-[#8A8787] w-full lg:w-[80%] xl:w-[60%] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[90%] mx-auto flex flex-col gap-4 text-[#FFF]"
        >
          <AccordionItem
            value="item-1"
            className="p-4 border border-[#D4D4D4] rounded-lg transition-colors duration-200"
          >
            <AccordionTrigger className="cursor-pointer text-base sm:text-[20px] lg:text-[24px] font-medium group-data-[state=open]:text-white text-[#10423E]">
              What methods of payments are supported?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-[26px] group-data-[state=open]:text-white/70">
              Cras vitae ac nunc orci. Purus amet tortor non at phasellus
              ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
              scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
              vel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="p-4 border border-[#D4D4D4] rounded-lg transition-colors duration-200"
          >
            <AccordionTrigger className="cursor-pointer text-base sm:text-[20px] lg:text-[24px] font-medium group-data-[state=open]:text-white text-[#10423E]">
              Can I cancel at anytime?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-[26px] group-data-[state=open]:text-white/70">
              Cras vitae ac nunc orci. Purus amet tortor non at phasellus
              ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
              scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
              vel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="p-4 border border-[#D4D4D4] rounded-lg transition-colors duration-200"
          >
            <AccordionTrigger className="cursor-pointer text-base sm:text-[20px] lg:text-[24px] font-medium group-data-[state=open]:text-white text-[#10423E]">
              How do I get a receipt for my purchase?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-[26px] group-data-[state=open]:text-white/70">
              Cras vitae ac nunc orci. Purus amet tortor non at phasellus
              ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
              scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
              vel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="p-4 border border-[#D4D4D4] rounded-lg transition-colors duration-200"
          >
            <AccordionTrigger className="cursor-pointer text-base sm:text-[20px] lg:text-[24px] font-medium group-data-[state=open]:text-white text-[#10423E]">
              Which license do I need?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-[26px] group-data-[state=open]:text-white/70">
              Cras vitae ac nunc orci. Purus amet tortor non at phasellus
              ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
              scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
              vel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="p-4 border border-[#D4D4D4] rounded-lg transition-colors duration-200"
            style={{ border: '1px solid #D4D4D4' }}
          >
            <AccordionTrigger className="cursor-pointer text-base sm:text-[20px] lg:text-[24px] font-medium group-data-[state=open]:text-white text-[#10423E]">
              How do I get access to a theme I purchased?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base leading-[26px] group-data-[state=open]:text-white/70">
              Cras vitae ac nunc orci. Purus amet tortor non at phasellus
              ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
              scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
              vel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
