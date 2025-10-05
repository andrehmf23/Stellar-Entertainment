"use client";

import React, { createContext, useContext, useState } from "react";

// Interface de um satélite
interface ISatellite {
  name: string;
  height: string;
  weight: string;
  fuel: string;
  country: string;
}

// Interface do contexto
interface ISatellitesContext {
  satellites: ISatellite[];
  addSatellite: (satellite: ISatellite | ISatellite[]) => void;
  removeSatellite: (name: string) => void; // remover pelo nome
}

// Criando o contexto
export const SatellitesContext = createContext<ISatellitesContext | undefined>(undefined);

// Hook customizado
export const useSatellites = () => {
  const context = useContext(SatellitesContext);
  if (!context) throw new Error("useSatellites deve ser usado dentro de um SatellitesProvider");
  return context;
};

// Provider
export function SatellitesProvider({ children }: { children: React.ReactNode }) {
  const [satellites, setSatellites] = useState<ISatellite[]>([]);

  const addSatellite = (satellite: ISatellite | ISatellite[]) => {
    setSatellites(prev => {
      const newSatellites = Array.isArray(satellite) ? satellite : [satellite];

      // Filtrar apenas os que não existem ainda (nome único)
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
