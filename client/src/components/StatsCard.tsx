interface StatsCardProps {
  title: string;
  value: string;
  growth: string;
}

function StatsCard({
  title,
  value,
  growth
}: StatsCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-md">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <div className="flex items-end justify-between mt-4">

        <h2 className="text-4xl font-bold text-gray-900">
          {value}
        </h2>

        <span className="text-green-600 font-medium">
          {growth}
        </span>

      </div>
    </div>
  );
}

export default StatsCard;