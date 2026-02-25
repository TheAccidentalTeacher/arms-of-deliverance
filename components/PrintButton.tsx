"use client";

export default function PrintButton() {
  return (
    <div className="print-button-bar no-print">
      <button className="print-btn" onClick={() => window.print()}>
        🖨 Print / Save as PDF
      </button>
      <span style={{ fontSize: "0.82rem", color: "var(--ink-soft)", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
        For professional formatting: in the Print dialog, set <strong>Headers and footers</strong> to{" "}
        <strong>None</strong> (or <em>Off</em>) — page numbers are built in.
      </span>
    </div>
  );
}
