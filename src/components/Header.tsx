import React from "react";
import { Link } from "react-router-dom";

export function CustomHeader() {

    return (
        <nav>
            <ul className="flex gap-5 p-3">
                <li>
                    <Link to="/contracts">Contracts</Link>
                </li>
                <li>
                    <Link to="/orbit">Check Orbit</Link>
                </li>
            </ul>
        </nav>
    );
}