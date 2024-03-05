import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export default function ThemeToggle() {
  const themeFromLocalStorage = localStorage.getItem('theme');

  const [theme, setTheme] = useState<string>(
    themeFromLocalStorage ? JSON.parse(themeFromLocalStorage) : 'light'
  );

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  // set the theme in the local storage on changing of theme
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <label className='swap swap-rotate'>
      {/* this hidden checkbox controls the state */}
      <input
        type='checkbox'
        className='theme-controller'
        value='synthwave'
        onChange={toggleTheme}
      />
      <LuSun className='swap-on h-5 w-5 md:h-6 md:6-7' />
      <LuMoon className='swap-off h-5 w-5 md:h-6 md:6-7' />
    </label>
  );
}
