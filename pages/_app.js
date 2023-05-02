import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>네가 꾸민 케이크</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
