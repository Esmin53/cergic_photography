"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';
import { FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  if (!mounted) {
    return <div className="w-10 h-10" />; // Prevents layout shift during hydration
  }

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        <FaSun />
    </button>
  )
}

export default ThemeSwitch