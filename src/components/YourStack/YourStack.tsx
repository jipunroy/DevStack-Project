import type { Technology } from "../../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-[9px] text-gray-400">
            {stack.length} Technology
            {stack.length !== 1 ? "s" : ""} Selected
          </p>
        </div>

        {/* Remove All */}
        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-[9px] font-medium text-red-400 transition hover:text-red-500"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-5 rounded-md border border-dashed border-gray-200 px-4 py-6 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
            <span className="text-lg text-gray-300">+</span>
          </div>

          <p className="mt-3 text-[10px] font-medium text-gray-500">
            Your stack is empty
          </p>

          <p className="mt-1 text-[9px] leading-4 text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-4 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-2 rounded-md border border-gray-100 bg-white px-2.5 py-2"
            >
              {/* Icon */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-gray-50">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Name + Category */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-medium text-gray-800">
                  {technology.name}
                </p>

                <p className="mt-0.5 text-[8px] text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-sm text-gray-300 transition hover:bg-red-50 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;