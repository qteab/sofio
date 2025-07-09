"use client";

import { useState, useEffect } from "react";
import type { VisualizationState } from "./types";

export const useScrollProgress = (containerId: string): VisualizationState => {
  const [state, setState] = useState<VisualizationState>({
    scrollProgress: 0,
    showFirstStat: false,
    showSecondStat: false,
    showFinalText: false,
  });

  useEffect(() => {
    const handleScroll = (): void => {
      const element = document.getElementById(containerId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the element
      const scrollTop = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, scrollTop / (elementHeight - windowHeight))
      );

      setState({
        scrollProgress: progress,
        showFirstStat: progress > 0.01,
        showSecondStat: progress > 0.4,
        showFinalText: progress > 0.7,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerId]);

  return state;
};
