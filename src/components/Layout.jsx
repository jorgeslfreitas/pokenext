import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>PokeNext</title>
                <meta name="description" content="Consumo da API PokeAPI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        
        </>
    )
}