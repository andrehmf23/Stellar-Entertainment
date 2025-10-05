"use client";

import { AppProvider, useApp } from "./app.context";
import { SatellitesProvider } from "./SatellitesContext";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <SatellitesProvider>
        {children}
      </SatellitesProvider>
    </AppProvider>
  );
}


export { AppProvider, useApp };
export { CanvasView } from "./CanvasView";

