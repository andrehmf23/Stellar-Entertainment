"use client";

import React from "react";

//<a href="https://www.flaticon.com/free-icons/flags" title="flags icons">Flags icons created by Marcus Christensen - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/states" title="states icons">States icons created by amoghdesign - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/investors" title="investors icons">Investors icons created by afif fudin - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by iconset.co - Flaticon</a>

const availableContracts = [
    {
        name: "European Union",
        description: "The EU needs a satellite to monitor shifting weather patterns along the north atlantic.",
        icon: "../assets/eu.png",
        contractValue: 25000000.00
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
    return(
        <div>
            <h2>Available contracts:</h2>
            {availableContracts.map((c) => {
                return (
                    <div>
                        <div><img className="h-48 w-48" src={c.icon}></img></div>
                        <h3>{c.name}</h3>
                        <p>{c.description}</p>
                        <button>Accept contract</button>
                    </div>
                );
            })}
        </div>
    );
}
