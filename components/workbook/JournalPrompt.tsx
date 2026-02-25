interface Props {
  prompt: string;
  lines?: number;
}

export default function JournalPrompt({ prompt, lines = 6 }: Props) {
  return (
    <div className="journal-prompt">
      <div className="jp-label">✏ Journal Prompt</div>
      <div className="jp-prompt">{prompt}</div>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="ruled-line" />
      ))}
    </div>
  );
}
