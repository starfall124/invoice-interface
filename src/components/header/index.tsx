import React from "react";

import styles from "./header.module.scss";

export type IHeader = {
    title: string;
    description: string;
};

export const Header: React.FC<IHeader> = ({ title, description }) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
            <p className={styles.header__description}>{description}</p>
        </div>
    );
};
