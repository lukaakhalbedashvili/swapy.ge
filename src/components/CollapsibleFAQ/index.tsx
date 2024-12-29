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
    <div onClick={toggleFAQ} className="flex flex-col justify-start">
      <button className={`w-full focus:outline-none p-4 pl-2 text-center`}>
        <div dangerouslySetInnerHTML={{ __html: question }} />
      </button>

      <div
        className={`overflow-hidden transition-height ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div
          className="p-4 pl-2 pt-0 border-b pb-12 mt-5 lg:text-center"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

export default CollapsibleFAQ;
