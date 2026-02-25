interface Props {
  week: number;
  title: string;
  subtitle?: string;
  color?: "blue" | "bible" | "default";
}

export default function WeekBanner({ week, title, subtitle, color = "default" }: Props) {
  return (
    <div className={`week-banner color-${color}`}>
      <div className="wb-label">Week {week}</div>
      <h2>{title}</h2>
      {subtitle && <div className="wb-subtitle">{subtitle}</div>}
    </div>
  );
}
