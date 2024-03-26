import '../styles/styles.css';
import { Link } from 'react-router-dom';
import { Backpack, Moon, Sun, Toolbox } from '@phosphor-icons/react';
import { useState } from 'react';

export const Header = () => {
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
    <header className="flex items-center justify-between border-b-2 border-stone-300 bg-yellow-400 px-4 py-8 text-sm font-extrabold uppercase lg:text-2xl">
      <div className="flex items-center">
        {isLightMode === 'light' ? (
          <Moon size={28} className="mr-2" />
        ) : (
          <Sun size={28} className="mr-2" />
        )}
        <button
          className="w-1 uppercase tracking-widest"
          onClick={themeHandler}
        >
          {isLightMode === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Link className="flex items-center" to="/">
          <Toolbox size={28} className="mr-2" />
          <p className="inline">
            School<span className="text-rose-600">Hacks</span>
          </p>
        </Link>
        <Link className="flex items-center" to="/workshops">
          <Backpack size={28} className="mr-2" />
          <p className="inline">
            Work<span className="text-rose-600">shops</span>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
