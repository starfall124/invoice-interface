import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { Header, InvoiceForm } from "@components";
import { Client } from "@types";
import styles from "@styles/home.module.scss";

export type IHome = {
    clients: Client[];
};

const Home: React.FC<IHome> = ({ clients }) => {
    return (
        <div className={styles.home}>
            <Head>
                <title>Invoice Interface</title>
                <link rel="shortcut icon" href="/icons/favicon.ico" />
            </Head>

            <Header title="Invoice" description="Create Invoice" />
            <InvoiceForm clients={clients} />
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`http://localhost:3000/api/client`);
    const clients: Client[] = (await res.json()) ?? [];

    return {
        props: { clients },
    };
};
