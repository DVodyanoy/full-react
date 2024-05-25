import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    PLAIN = 'plain',
}

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonPropsType> = ({
    children,
    className,
    theme,
    ...otherProps
}) => (
    <button
        type="button"
        className={classNames(styles.button, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
