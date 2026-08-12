import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * Fades/slides page content in on each route change and restores scroll to top.
 * Respects prefers-reduced-motion via CSS.
 */
export function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div key={pathname} className="route-fade-in">
      <Outlet />
    </div>
  );
}
