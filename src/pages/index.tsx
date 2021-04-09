import Head from 'next/head'

// components
import Header from '../components/index'

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>home</h1>

    </>
  )
}
