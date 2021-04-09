import Head from 'next/head'

// styles
import { Container } from './styles'

// components
import Card from '../components/Card/index'

export default function Home () {
  return (
    <>
      <Head>
        <title>Covid - 19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <img src="/covid.png" className="covidLogoTop" />
        <img src="/covid.png" className="covidLogoBottom" />
        <h1>Covid in real time</h1>
        <Card />
      </Container>

    </>
  )
}
