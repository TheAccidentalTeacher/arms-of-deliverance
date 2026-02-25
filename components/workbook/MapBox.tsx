interface Props {
  label?: string;
  height?: string;
}

export default function MapBox({ label, height = "240px" }: Props) {
  return (
    <div className="map-box-wrapper">
      {label && <p className="map-box-label">{label}</p>}
      <div className="map-box" style={{ minHeight: height }} />
    </div>
  );
}
