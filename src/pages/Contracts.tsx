"use client";
import React from "react";

//<a href="https://www.flaticon.com/free-icons/flags" title="flags icons">Flags icons created by Marcus Christensen - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/states" title="states icons">States icons created by amoghdesign - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/investors" title="investors icons">Investors icons created by afif fudin - Flaticon</a>

const availableContracts = [
    {
        name: "European Union",
        icon: "../assets/eu.png",
        contractValue: 25000000.00
    },
    {
        name: "US Government",
        icon: "../assets/us.png",
        contractValue: 180000000.00
    },
    {
        name: "Private investors",
        icon: ""
    }
]

const Contracts: React.FC = () => {
    return(
        <p>Teste</p>
    );
}

export default Contracts;