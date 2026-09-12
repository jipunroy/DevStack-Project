import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="flex h-full min-h-60 flex-col rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
      
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-3 text-sm font-semibold leading-5 text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1.5 min-h-12 text-[10px] leading-4 text-gray-400">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-auto pt-3">
        <div className="flex min-h-7 items-center justify-between gap-2">
          
          {/* Category */}
          <span className="rounded bg-gray-50 px-2 py-1 text-[9px] text-gray-500">
            {technology.category}
          </span>

          {/* Difficulty */}
          <span className="text-[9px] text-gray-400">
            {technology.difficulty}
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 text-[9px] text-gray-500">
            <span className="text-yellow-400">★</span>
            {technology.rating}
          </span>

        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-3 w-full rounded-md py-2.5 text-[10px] font-medium transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;