'use client';

import { VisuallyHidden, useSwitch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } = useSwitch();

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input
            {...getInputProps()}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-11 h-9',
              `flex items-center justify-center ${
                theme === 'dark' ? '!bg-pink-700' : '!bg-transparent'
              } !text-foreground`,
              'rounded-lg bg-default-00 hover:bg-default-200',
            ],
          })}
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </div>
      </Component>
    </div>
  );
};
