interface Props {
  term: string;
  definition: string;
}

export default function VocabCard({ term, definition }: Props) {
  return (
    <div className="vocab-card">
      <div className="vc-term">{term}</div>
      <div className="vc-def">{definition}</div>
    </div>
  );
}
