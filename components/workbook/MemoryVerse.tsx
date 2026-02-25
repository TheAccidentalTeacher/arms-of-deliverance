interface Props {
  reference: string;
  text: string;
  version?: string;
  lines?: number;
}

export default function MemoryVerse({ reference, text, version = "KJV", lines = 4 }: Props) {
  return (
    <div className="memory-verse">
      <div className="mv-label">✦ Memory Verse</div>
      <blockquote>&ldquo;{text}&rdquo;</blockquote>
      <div className="verse-ref">{reference} ({version})</div>
      <div className="mv-write-label">Write this verse from memory:</div>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="ruled-line" />
      ))}
    </div>
  );
}
