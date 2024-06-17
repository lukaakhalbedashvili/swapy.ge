import { useState } from "react";

const CollapsibleFAQ = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleFAQ}>
      <button
        className={`w-full text-left focus:outline-none p-4 pl-2 ${
          isOpen && "pt-12"
        }`}
      >
        {question}
      </button>

      <div
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="p-4 pl-2 pt-0 border-b pb-12 mt-5">{answer}</div>
      </div>
    </div>
  );
};

export default CollapsibleFAQ;
