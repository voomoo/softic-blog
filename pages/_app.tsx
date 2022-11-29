import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {apiSlice} from "../_redux/slices/apiSlice";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ApiProvider api={apiSlice}>
            <Component {...pageProps} />
        </ApiProvider>
    )
}
