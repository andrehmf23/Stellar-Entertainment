"use client";

import React, { createContext, useContext, useState } from "react";

// Satellite interface
interface ISatellite {
  name: string;
  size: string;
  country: string;
}

// Context interface
interface ISatellitesContext {
  satellites: ISatellite[];
  addSatellite: (satellite: ISatellite | ISatellite[]) => void;
  removeSatellite: (name: string) => void; // remove by name
}

// Creating the context
export const SatellitesContext = createContext<ISatellitesContext | undefined>(undefined);

// Custom hook
export const useSatellites = () => {
  const context = useContext(SatellitesContext);
  if (!context) throw new Error("useSatellites must be used within a SatellitesProvider");
  return context;
};

// Provider
export function SatellitesProvider({ children }: { children: React.ReactNode }) {
  const [satellites, setSatellites] = useState<ISatellite[]>([]);

  const addSatellite = (satellite: ISatellite | ISatellite[]) => {
    setSatellites(prev => {
      const newSatellites = Array.isArray(satellite) ? satellite : [satellite];

      // Filter only satellites that don't exist yet (unique name)
      const filtered = newSatellites.filter(
        s => !prev.some(existing => existing.name === s.name)
      );

      return [...prev, ...filtered];
    });
  };

  const removeSatellite = (name: string) => {
    setSatellites(prev => prev.filter(s => s.name !== name));
  };

  return (
    <SatellitesContext.Provider value={{ satellites, addSatellite, removeSatellite }}>
      {children}
    </SatellitesContext.Provider>
  );
}
