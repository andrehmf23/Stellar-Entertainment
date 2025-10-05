"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { countries, fuelTypes, rockets, type IContract } from "../interfaces";
import { useApp } from "../context";
import { randomInt } from "../utils";
import { routes } from "../routes";

export function Contracts() {
    const app = useApp();
    const navigate = useNavigate();
    const [contracts, setContracts] = useState<IContract[]>([]);

    const signContract = (contract: IContract) => {
        app.setCurrentContract(contract);
        navigate(routes.rocket);
    };

    const rejectContract = (contract: IContract) => {
        setContracts((prevContracts) =>
            prevContracts.filter((c) => c !== contract)
        );
    };

    function createContract() {
        const randomCountry = countries[randomInt(0, countries.length - 1)];
        const rocketName = rockets[randomInt(0, rockets.length - 1)];

        const newContract: IContract = {
            name: rocketName,
            description: `A new contract from ${randomCountry.name} to launch a rocket called ${rocketName}.`,
            icon: randomCountry.icon,
            contractValue: randomInt(50000000, 500000000),
            fuelType: fuelTypes[randomInt(0, fuelTypes.length - 1)],
            country: randomCountry.name,
            fuel_mass: randomInt(9999999, 99999999),
            rocket_mass: randomInt(50000, 500000),
        };

        setContracts((prevContracts) => [...prevContracts, newContract]);
    }

    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            createContract();
        }

        const interval = setInterval(() => {
            const nextDelay = randomInt(30000, 60000);

            createContract();

            clearInterval(interval);
            setTimeout(() => {
                interval;
            }, nextDelay);
        }, randomInt(30000, 60000));

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="p-3">
                <h2 className="text-xl">Available contracts</h2>
                <div className="flex flex-wrap justify-evenly">
                    {contracts.map((c, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full max-w-150 my-3 p-3 flex gap-2 border border-gray-400 bg-gray-800 rounded-sm"
                            >
                                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                                    <c.icon
                                        className="h-11 w-11 rounded-full"
                                        src={c.icon}
                                    ></c.icon>
                                </div>
                                <div className="grow">
                                    <h3>{c.name}</h3>
                                    <p className="text-xs">{c.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <p className="text-xs">
                                            Contract value:{" "}
                                            <span className="text-green-300">
                                                {c.contractValue.toLocaleString(
                                                    "en-US",
                                                    {
                                                        style: "currency",
                                                        currency: "USD",
                                                    }
                                                )}
                                            </span>
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => signContract(c)}
                                                className="text-black !bg-[#E7F434] !p-1 !text-xs !rounded"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    rejectContract(c)
                                                }
                                                className="!bg-red-500 !p-1 !text-xs !rounded"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
