import {useEffect, useState} from 'react';
import {Moon, Sun} from "@phosphor-icons/react";

function DarkTheme() {

    const [isLightMode, setIsLightMode] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

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
        <div className="flex items-center">
                {isLightMode === 'light' ? (
                    <Moon size={30} className="mr-2 cursor-pointer" onClick={themeHandler}/>
                ) : (
                    <Sun size={30} className="mr-2 cursor-pointer" onClick={themeHandler}/>
                )}
        </div>
    );
}

export default DarkTheme;