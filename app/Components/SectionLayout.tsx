import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionLayout = ({ children, ref }: SectionLayoutProps) => {
  return <section className="px-40 py-20 ">{children}</section>;
};

export default SectionLayout;
