import React from "react";

interface Props { children: React.ReactNode; }

export default function FillBlank({ children }: Props) {
  return <span className="fill-blank">{children || "\u00a0"}</span>;
}
