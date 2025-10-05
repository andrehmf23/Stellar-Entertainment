"use client";

import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export function Home() {
    const phrases = [
        "Hello astronaut!",
        "Welcome, NASA!",
        "Welcome to Project Hermes!",
    ];

    return (
        <div className="flex gap-16 flex-col items-center justify-center text-white">
            <div className="p-8">
                <div className="flex gap-16 justify-center">
                    <div className="w-1/3 flex gap-8 flex-col items-center">
                        <div className="w-full h-16">
                            <Typewriter
                                options={{
                                    strings: phrases,
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName:
                                        "text-4xl !text-[#E7F434] font-bold mb-4",
                                    cursorClassName: "text-4xl text-[#E7F434]",
                                }}
                            />
                        </div>
                        <p>
                            The future of business lies beyond Earth and Project
                            Hermes is leading this revolution. Developed for
                            NASA's Space Applications Challenge 2025, our
                            technology offers a new sustainable and scalable
                            operating model in low-Earth orbit (LEO), combining
                            innovation, efficiency, and
                            environmental responsibility.
                        </p>
                    </div>
                    <img src="/assets/astronaut.avif" alt="astronaut" />
                </div>
            </div>
            <footer className="w-full p-4 bg-black">
                <div className="flex gap-8 justify-between mb-8">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-lg">Supporters</h3>
                        <div className="w-max flex gap-4">
                            <img
                                src="/assets/spaceapp.png"
                                alt="nasa space apps"
                                className="h-24"
                            />
                            <img
                                src="/assets/nasa.png"
                                alt="nasa"
                                className="h-24"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-lg">Networks</h3>
                        <Link to="https://github.com/andrehmf23/Stellar-Entertainment">
                            <img
                                src="/assets/github.png"
                                alt="nasa"
                                className="h-12"
                            />
                        </Link>
                    </div>
                </div>
                <p className="text-center text-white">
                    © 2025 Project Hermes. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
