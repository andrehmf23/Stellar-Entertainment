import { Link } from "react-router-dom";

export function Footer() {
    return (
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
    );
}
