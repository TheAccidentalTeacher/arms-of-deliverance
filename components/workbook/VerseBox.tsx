interface Props {
  reference: string;
  text: string;
  version?: string;
}

export default function VerseBox({ reference, text, version = "KJV" }: Props) {
  return (
    <div className="verse-box">
      <blockquote>&ldquo;{text}&rdquo;</blockquote>
      <div className="verse-ref">{reference} ({version})</div>
    </div>
  );
}
