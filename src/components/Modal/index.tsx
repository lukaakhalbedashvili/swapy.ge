import Image from "next/image";
import React, { ReactNode, useEffect } from "react";

interface DIlogI {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Dialog = ({ children, isOpen, handleClose }: DIlogI) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleClose]);

  return isOpen ? (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <button onClick={handleClose} className="absolute top-4 right-3 z-50">
        <Image src="/close.svg" width={24} height={24} alt={"close"} />
      </button>

      {children}
    </div>
  ) : (
    <></>
  );
};

export default Dialog;
