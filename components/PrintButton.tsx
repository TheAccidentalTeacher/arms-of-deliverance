"use client";

export default function PrintButton() {
  return (
    <div className="print-button-bar no-print">
      <button className="print-btn" onClick={() => window.print()}>
        🖨 Print / Save as PDF
      </button>
      <span style={{ fontSize: "0.85rem", color: "var(--ink-soft)", fontFamily: "system-ui, sans-serif" }}>
        Use your browser&rsquo;s Print dialog — select &ldquo;Save as PDF&rdquo; for a digital copy.
      </span>
    </div>
  );
}
