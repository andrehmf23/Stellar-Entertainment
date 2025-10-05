"use client";


type Contract = {
    name: string;
    description: string;
    icon: string;
    contractValue: Number;
};

const AVAILABLE_CONTRACTS: Contract[] = [
    {
        name: "European Union",
        description: "The EU needs a satellite to monitor shifting weather patterns along the north atlantic.",
        icon: "../assets/eu.png",
        contractValue: 80000000.00
    },
    {
        name: "US Government",
        description: "The department of defense needs help with its intelligence infrastructure on the straight of Malacca.",
        icon: "../assets/us.png",
        contractValue: 440000000.00
    },
    {
        name: "Private investors",
        description: "An independent corporation wishes to set up its own weather satellite.",
        icon: "../assets/mutual-fund.png",
        contractValue: 200000000
    },
    {
        name: "Brazilian government",
        description: "Brazil wants to launch a communications satellite to bolster its internet infrastructure.",
        icon: "../assets/brazil.png",
        contractValue: 180000000
    }
]

export function Contracts() {
    const signContract = (contract: Contract) => {
        console.log("Contract signed with " + contract.name);
    }

    return(
        <div>

            <div className="p-3">
                <h2 className="text-xl">Available contracts:</h2>
                <ul>
                    {AVAILABLE_CONTRACTS.map((c, index) => {
                        return (
                            <li key={index}>
                                <div className="max-w-150 bg-gray-800 m-3 p-3 rounded-sm flex gap-2">
                                    <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img className="h-11 w-11" src={c.icon}></img>
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
