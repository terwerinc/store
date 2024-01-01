import React from "react";
import Head from "next/head";

export default function Home() {
    return <>
        <Head>
            <title>Publisher Store</title>
            <meta name="description" content="This is a series of publishing tool plugins officially released by Terwer Inc." />
            <meta name="keywords" content="Store, Publisher, Plugin, Platform" />
        </Head>
        <h1>Welcome to Publisher Store!</h1>
        <p>© 2010-2024 Terwer Inc. All Rights Reserved.</p>
    </>;
}