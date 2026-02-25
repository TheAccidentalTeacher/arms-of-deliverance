interface Props {
  title: string;
  subtitle?: string;
  author?: string;
  series?: string;
  description?: string;
}

export default function CoverPage({ title, subtitle, author, series, description }: Props) {
  return (
    <div className="cover-page">
      {series && <div className="cover-series">{series}</div>}
      <h1 className="cover-title">{title}</h1>
      {subtitle && <h2 className="cover-subtitle">{subtitle}</h2>}
      {author && <div className="cover-author">by {author}</div>}
      {description && <div className="cover-description">{description}</div>}
    </div>
  );
}
