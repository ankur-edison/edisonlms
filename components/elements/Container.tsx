import React from "react";

interface Container {
  children: React.ReactNode;
  className?: string;
}

function Container(props: Container) {
  const { children, className = "" } = props;
  return (
    <div
      className={`container mx-auto px-4 lg:px-10 2xl:w-[1280px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
