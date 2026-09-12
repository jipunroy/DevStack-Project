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
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[10px] text-gray-400">
  {stack.length === 0
    ? "No Technologies Selected Yet"
    : `${stack.length} ${
        stack.length === 1 ? "Technology" : "Technologies"
      } Selected`}
      </p>
      </div>

      {/* Stack Items */}
      {stack.length > 0 ? (
        <div className="space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-md border border-gray-100 px-2.5 py-2"
            >
              {/* Technology Info */}
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-50">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold text-gray-900">
                    {technology.name}
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="ml-2 shrink-0 px-1 text-sm leading-none text-gray-400 transition hover:text-gray-700"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-gray-200 py-6 text-center">
          <p className="text-[10px] text-gray-400">
            Your Stack Is Empty
        </p>
        </div>
      )}

      {/* Remove All */}
      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 flex w-full items-center justify-center rounded-md border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}

export default YourStack;