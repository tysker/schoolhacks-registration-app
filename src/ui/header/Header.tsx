import DarkTheme from "./DarkTheme.tsx";
import LinkLogo from "./LinkLogo.tsx";
import {Backpack, Toolbox} from "@phosphor-icons/react";

export const Header = () => {

    return (
        <header className="flex justify-around bg-yellow-400 font-extrabold text-sm uppercase h-[50px] md:h-[100px] md:text-3xl">
            <DarkTheme/>
            <div className="flex gap-4 md:mb-0 md:ml-0">
                <LinkLogo to="/" linkName={["School", "Hack"]} element={<Toolbox size={28} className="mr-2"/>}/>
                <LinkLogo to="workshops" linkName={["Work", "Shops"]} element={<Backpack size={28} className="mr-2"/>}/>
            </div>
        </header>
    );
};

export default Header;
