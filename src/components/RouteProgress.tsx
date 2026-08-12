import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/**
 * Thin top progress bar shown while the router is navigating/loading.
 * Delays appearance slightly so instant navigations don't flash.
 */
export function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const t = window.setTimeout(() => setVisible(true), 120);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setVisible(false), 220);
    return () => window.clearTimeout(t);
  }, [isLoading]);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="route-progress-bar h-full w-full origin-left bg-primary" />
    </div>
  );
}
