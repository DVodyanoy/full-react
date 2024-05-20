import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

type LangSwitcherPropsType = {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherPropsType) => {
    const {t, i18n} = useTranslation();

    const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

    return (
            <Button
                className={classNames(styles.langSwitcher, {}, [className])}
                onClick={onToggleLang}
                theme={ThemeButton.PLAIN}
            >
                {t('lang')}
            </Button>
    );
};