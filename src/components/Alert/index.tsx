import React, { useEffect } from "react";

interface AlertI {
  text: string;
  onClose: () => void;
}

const Alert = ({ text, onClose }: AlertI) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed left-5 bottom-5 bg-slate-50 p-5 rounded-md text-black z-50">
      {text}
    </div>
  );
};

export default Alert;
