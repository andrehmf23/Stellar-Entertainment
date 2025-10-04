import React from "react";
import { Link } from "react-router-dom";

export function CustomHeader() {

    return (
      <nav className="bg-gray-800 p-4 flex gap-6">
        <Link
          to="/"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/contracts"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Contracts
        </Link>
        <Link
          to="/about"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="/orbit"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Orbit
        </Link>
        <Link
          to="/rocket"
          className="text-white font-semibold hover:text-yellow-400 transition-colors"
        >
          Rocket
        </Link>
      </nav>
    );
}