/* eslint-disable @typescript-eslint/no-explicit-any */
import { US, BR, EU, CN } from 'country-flag-icons/react/3x2'

export type TFuelType = "RP-1 + LOX" | "Liquid hydrogen + LOX" | "Solid";

export interface IContract {
    name: string;
    description?: string;
    icon?: any;
    contractValue?: number;
    fuelType: TFuelType;
    country: string;
    fuel_mass: number;
    rocket_mass: number;
}

export const rockets: string[] = [
    "Saturn V",
    "Falcon 9",
    "Falcon Heavy",
    "Starship",
    "Atlas V",
    "Delta IV Heavy",
    "Ariane 5",
    "Ariane 6",
    "Soyuz",
    "Proton-M",
    "Long March 2F",
    "Long March 5",
    "H-IIA",
    "H3",
    "GSLV Mk III",
    "PSLV",
    "Vega",
    "Electron",
    "Neutron",
    "New Shepard",
    "New Glenn",
    "Vulcan Centaur",
    "Minotaur IV",
    "Antares",
    "Pegasus",
];

export const countries = [
    { name: "United States", code: "US", icon: US },
    { name: "Brazil", code: "BR", icon: BR },
    { name: "European Union", code: "EU", icon: EU },
    { name: "China", code: "CH", icon: CN },
];

export const fuelTypes: TFuelType[] = [
    "RP-1 + LOX",
    "Liquid hydrogen + LOX",
    "Solid",
];
