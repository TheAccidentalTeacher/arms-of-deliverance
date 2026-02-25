interface Props {
  question: string;
  lines?: number;
}

export default function ShortAnswer({ question, lines = 4 }: Props) {
  return (
    <div className="short-answer-block">
      <div className="sa-question">{question}</div>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="ruled-line" />
      ))}
    </div>
  );
}
