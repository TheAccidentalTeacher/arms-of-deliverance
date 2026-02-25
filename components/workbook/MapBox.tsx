interface Props {
  label?: string;
  height?: string;
}

export default function MapBox({ label = "Map / Diagram Area", height = "240px" }: Props) {
  return (
    <div className="map-box" style={{ height }}>
      {label}
    </div>
  );
}
