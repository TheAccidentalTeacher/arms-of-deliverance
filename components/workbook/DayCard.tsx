import React from "react";

interface Props {
  day: number;
  week: number;
  title: string;
  children: React.ReactNode;
}

export default function DayCard({ day, week, title, children }: Props) {
  return (
    <div className="day-card">
      <div className="dc-header">
        <span className="dc-day">Week {week} · Day {day}</span>
        <span className="dc-title">{title}</span>
      </div>
      {children}
    </div>
  );
}
