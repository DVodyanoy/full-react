import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/Applink/AppLink";
import {useTranslation} from "react-i18next";

type NavbarPropsType = {
    className?: string;
}

export const Navbar: FC<NavbarPropsType> = ({ className }) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink className={styles.mainLink} to={'/'} theme={AppLinkTheme.INVERTED}>{t('main')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>{t('about')}</AppLink>
            </div>
        </div>
    );
};