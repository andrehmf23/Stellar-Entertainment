import { Link } from "react-router-dom";
import { routes } from "../routes";

interface IPage {
    name: string;
    link: string;
}

export function Header() {
    const pages: Array<IPage> = [
        {
            name: "Contracts",
            link: routes.contracts,
        },
        {
            name: "About",
            link: routes.about,
        },
        {
            name: "Orbit",
            link: routes.orbit,
        },
        {
            name: "Rocket",
            link: routes.rocket,
        },
        {
            name: "Rocket",
            link: routes.rocket,
        },
    ];

    return (
        <div className="p-4 flex gap-4 justify-between items-center">
            <Link to={routes.home} className="!text-4xl text-white hover:text-white uppercase">Hermes</Link>
            <nav className="flex gap-6">
                {pages.map((page) => {
                    return (
                        <Link
                            key={page.name}
                            to={page.link}
                            className="text-white font-semibold hover:text-yellow-400 transition-colors"
                        >
                            {page.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
