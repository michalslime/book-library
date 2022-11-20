import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import NativeCurrencyBalance from "../components/NativeCurrencyBalance";
import TokenBalance from "../components/TokenBalance";
import BookLibrary from "../components/BookLibrary";
import { ALBT_TOKEN_ADDRESS, LIBRARY_ADDRESS } from "../constants";
import useEagerConnect from "../hooks/useEagerConnect";
import BooksList from "../components/BooksList";
import { useState } from "react";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingFunction = (isLoading: boolean) => {
    setIsLoading(isLoading);
  }

  const sharedObject = {}

  return (
    <div>
      <Head>
        <title>LimeAcademy-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>LimeAcademy-boilerplate</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>
          Welcome to{" "}
          <a href="https://github.com/LimeChain/next-web3-boilerplate">
            LimeAcademy-boilerplate
          </a>
        </h1>

        {isConnected && (
          <section>
            <NativeCurrencyBalance />

            <TokenBalance tokenAddress={ALBT_TOKEN_ADDRESS} symbol="ALBT" />
            <BookLibrary contractAddress={LIBRARY_ADDRESS} loading={loadingFunction} sharedObject={sharedObject} />
            <BooksList contractAddress={LIBRARY_ADDRESS} loading={loadingFunction} sharedObject={sharedObject} />
          </section>
        )}
      </main>
      <div className="overlay" style={{
        display: isLoading ? 'flex' : ''
      }}>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }

        .overlay {
          position: fixed; /* Sit on top of the page content */
          display: none; /* Hidden by default */
          width: 100%; /* Full width (cover the whole page) */
          height: 100%; /* Full height (cover the whole page) */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5); /* Black background with opacity */
          z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
          cursor: pointer; /* Add a pointer on hover */
          align-items: center;
          justify-content: center;
        }
        
        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #fff;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 8px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 8px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 32px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 56px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
