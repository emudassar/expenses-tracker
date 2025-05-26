function OverviewCard({ title, value }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-neutral">{title}</h3>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}

export default OverviewCard;