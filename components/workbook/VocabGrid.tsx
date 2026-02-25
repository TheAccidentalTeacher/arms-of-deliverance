import React from "react";

interface Props { children: React.ReactNode; }

export default function VocabGrid({ children }: Props) {
  return <div className="vocab-grid">{children}</div>;
}
