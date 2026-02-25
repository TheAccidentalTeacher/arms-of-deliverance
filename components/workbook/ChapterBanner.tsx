interface Props {
  chapter: string;
  title: string;
}

export default function ChapterBanner({ chapter, title }: Props) {
  return (
    <div className="chapter-banner">
      <div className="cb-label">{chapter}</div>
      <h3>{title}</h3>
    </div>
  );
}
