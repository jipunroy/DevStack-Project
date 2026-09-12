import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

export const useTechnologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error loading technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return { technologies, loading };
};