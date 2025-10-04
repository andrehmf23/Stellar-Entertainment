"use client";

import { AppProvider, useApp } from "./app.context";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export { AppProvider, useApp };
export { CanvasView } from "./CanvasView";

