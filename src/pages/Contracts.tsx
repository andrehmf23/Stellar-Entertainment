"use client";

import { useEffect, useState } from "react";
import { US, BR, EU } from 'country-flag-icons/react/3x2'

import { randomInt } from "../utils";
import type { IContract } from "../interfaces";

const rockets: string[] = [
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
  "Pegasus"
];


const countries = [
    { name: "United States", code: "US", icon: US },
    { name: "Brazil", code: "BR", icon: BR },
    { name: "European Union", code: "EU", icon: EU },
];

export function Contracts() {
    const [contracts, setContracts] = useState<IContract[]>([]);

    const signContract = (contract: IContract) => {
        console.log("Contract signed with " + contract.name);
    }

    function createContract() {
        const randomCountry = countries[randomInt(0, countries.length - 1)];
        const rocketName = rockets[randomInt(0, rockets.length - 1)];

        const newContract: IContract = {
            name: rocketName,
            description: `A new contract from ${randomCountry.name} to launch a rocket called ${rocketName}.`,
            icon: randomCountry.icon,
            contractValue: randomInt(50000000, 500000000)
        }

        setContracts((prevContracts) => [...prevContracts, newContract]);
    }

    useEffect(() => {
        let n = 0;

        while (n < 5) {
            createContract();
            n++;
        }
    }, []);

    return(
        <div>
            <div className="p-3">
                <h2 className="text-xl">Available contracts:</h2>
                <ul>
                    {contracts.map((c, index) => {
                        return (
                            <li key={index}>
                                <div className="max-w-150 bg-gray-800 m-3 p-3 rounded-sm flex gap-2">
                                    <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                                        <c.icon className="h-11 w-11" src={c.icon}></c.icon>
                                    </div>
                                    <div className="grow">
                                        <h3>{c.name}</h3>
                                        <p className="text-xs">{c.description}</p>
                                        <div className="flex place-content-between mt-3">
                                            <p className="text-xs">Contract value: <span className="text-green-300">
                                                { c.contractValue.toLocaleString
                                                (
                                                    'en-US', {style: 'currency',currency: 'USD',}
                                                )}
                                            </span>
                                            </p>
                                            <button onClick={() => signContract(c)} className="!bg-green-500 !p-1 !text-xs">Accept contract</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p className="text-[10px] opacity-50">We have used a few icons in the creation of this page, and they have asked to be credited. Thus, here are their links:</p>
                <ul>
                    <li className="h-3">
                        <a className="text-[10px] opacity-75" href="https://www.flaticon.com/free-icons/flags" title="flags icons">Flags icons created by Marcus Christensen - Flaticon</a>
                    </li>
                    <li className="h-3">
                        <a className="text-[10px] opacity-75" href="https://www.flaticon.com/free-icons/states" title="states icons">States icons created by amoghdesign - Flaticon</a>
                    </li>
                    <li className="h-3">
                        <a className="text-[10px] opacity-75" href="https://www.flaticon.com/free-icons/investors" title="investors icons">Investors icons created by afif fudin - Flaticon</a>
                    </li>
                    <li className="h-3">
                        <a className="text-[10px] opacity-75" href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by iconset.co - Flaticon</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
