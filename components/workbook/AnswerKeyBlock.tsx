import React from "react";

interface Props { children: React.ReactNode; }

export default function AnswerKeyBlock({ children }: Props) {
  return (
    <div className="answer-key-block">
      <span className="ak-label">✔ Answer Key / Discussion Guide</span>
      {children}
    </div>
  );
}
