import React, { ReactNode } from "react";

interface DIlogI {
  children: ReactNode;
  isOpen: boolean;
}

const Dialog = ({ children, isOpen }: DIlogI) => {
  return isOpen ? (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {children}
    </div>
  ) : (
    <></>
  );
};

export default Dialog;
