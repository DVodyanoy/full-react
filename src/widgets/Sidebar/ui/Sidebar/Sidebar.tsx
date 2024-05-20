import React, {useState} from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

type SidebarPropsType = {
    className?: string;
}

export const Sidebar = ({ className }: SidebarPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};