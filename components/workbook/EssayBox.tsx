interface Props {
  prompt: string;
  lines?: number;
}

export default function EssayBox({ prompt, lines = 12 }: Props) {
  return (
    <div className="essay-box">
      <div className="eb-prompt">{prompt}</div>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="ruled-line" />
      ))}
    </div>
  );
}
