import React, { FC } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkPropsType extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkPropsType> = ({
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    className,
    ...otherProps
}) => {
    return (
        <Link to={to}
              className={classNames(styles.appLink, {theme}, [className, styles[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};