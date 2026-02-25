import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function QuizBlock({ title, children }: Props) {
  return (
    <div className="quiz-block">
      {title && <div className="qb-title">📝 {title}</div>}
      {children}
    </div>
  );
}
