import DarkTheme from "./DarkTheme.tsx";
import LinkLogo from "./LinkLogo.tsx";
import {Backpack, Toolbox} from "@phosphor-icons/react";

export const Header = () => {

    return (
        <header className="flex flex-col bg-yellow-400 font-extrabold uppercase gap-2 md:text-2xl md:flex-row md:items-center md:justify-around md:h-[100px]">
            <DarkTheme/>
            <div className="flex mb-2 ml-2 gap-2 md:mb-0 md:ml-0">
                <LinkLogo to="/" linkName={["School", "Hack"]} element={<Toolbox size={28} className="mr-2"/>}/>
                <LinkLogo to="workshops" linkName={["Work", "Shops"]} element={<Backpack size={28} className="mr-2"/>}/>
            </div>
        </header>
    );
};

export default Header;
