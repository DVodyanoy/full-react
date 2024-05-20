import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkSwitcherIcon from "shared/assets/icons/switcher_dark.svg";
import LightSwitcherIcon from "shared/assets/icons/switcher_light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

type ThemeSwitcherPropsType = {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherPropsType) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.PLAIN}
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightSwitcherIcon /> : <DarkSwitcherIcon />}
        </Button>
    );
};