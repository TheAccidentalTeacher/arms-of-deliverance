import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SidebarBox({ title, children }: Props) {
  return (
    <div className="sidebar-box">
      <div className="sb-title">{title}</div>
      {children}
    </div>
  );
}
