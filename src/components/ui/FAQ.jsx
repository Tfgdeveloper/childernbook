import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const defaultItems = Array.from({ length: 6 }, () => ({
  question: "Lorem Ipsum is simply dummy text of printing?",
  answer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.",
}));

const FAQ = ({ items = defaultItems, defaultOpen = 0 }) => {
  // Controlled value so AnimatePresence knows which item is open
  const [openItem, setOpenItem] = useState(
    defaultOpen !== null ? `item-${defaultOpen}` : ""
  );
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-md rounded-xl bg-[#F7DFC5] px-5 py-4 shadow-[0_4px_14px_rgba(120,72,30,0.15)] sm:px-6">
      <Accordion.Root
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="w-full"
      >
        {items.map((item, index) => {
          const value = `item-${index}`;
          const isOpen = openItem === value;

          return (
            <Accordion.Item
              key={value}
              value={value}
              className="border-b border-[#d9bfa4] last:border-b-0"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 rounded-md py-4 text-left font-serif text-[15px] font-bold leading-snug text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f28c13]/50">
                  {item.question}
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-[#b9a08a] transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-gray-800"
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <Accordion.Content forceMount asChild>
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
                    >
                      <p className="-mt-2 pb-4 pr-6 text-[13px] leading-relaxed text-gray-700">
                        {item.answer}
                      </p>
                    </motion.div>
                  </Accordion.Content>
                )}
              </AnimatePresence>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;