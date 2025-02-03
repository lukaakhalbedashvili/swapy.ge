import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
};

export default Loading;
