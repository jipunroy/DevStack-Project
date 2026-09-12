import { useState } from "react";
import type { Technology } from "../../types/technology";
import { useTechnologies } from "../../hooks/useTechnologies";
import TechnologyCard from "./TechnologyCard";
import YourStack from "../YourStack/YourStack";

function Technologies() {
  const { technologies, loading } = useTechnologies();

  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section
      id="technologies"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-xs text-gray-400">
            Pick technologies to build your ideal development stack.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-gray-400">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack */}
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Technologies;