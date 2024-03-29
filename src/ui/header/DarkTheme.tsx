import {useState} from 'react';
import {Moon, Sun} from "@phosphor-icons/react";

function DarkTheme() {

    const [isLightMode, setIsLightMode] = useState(
        localStorage.getItem('theme') || 'light',
    );

    if (isLightMode === 'dark') {
        document.documentElement.classList.add('dark');
    }

    const themeHandler = () => {
        if (isLightMode === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            setIsLightMode('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            setIsLightMode('light');
        }
    };
    return (
        <div className="flex items-center mt-2 ml-2 md:mb-0 md:mt-0">
            {isLightMode === 'light' ? (
                <Moon size={28} className="mr-2"/>
            ) : (
                <Sun size={28} className="mr-2"/>
            )}
            <button
                className="w-1 uppercase tracking-widest"
                onClick={themeHandler}
            >
                {isLightMode === 'light' ? 'Dark' : 'Light'}
            </button>
        </div>
    );
}

export default DarkTheme;