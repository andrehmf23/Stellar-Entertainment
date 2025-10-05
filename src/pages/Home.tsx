"use client";

import Typewriter from "typewriter-effect";
import { Footer } from "../components";

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
            <Footer />
        </div>
    );
}
