type MetricCardProps = {
  value: string;
  label: string;
};

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="metric-card">
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
    </div>
  );
}
