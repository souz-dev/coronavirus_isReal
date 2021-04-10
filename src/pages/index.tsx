import Head from 'next/head'

// styles
import { Container } from './styles'

// components
import Card from '../components/Card/index'
import Button from '../components/Button/index'

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
        <main className="main">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente blanditiis neque quo repellat, <br />
            vero repudiandae, molestias autem maiores iure delectus consectetur distinctio sit quia <br />
            Cupiditate magni aut deserunt perspiciatis?</p>
          < Button />
        </main>
      </Container>

    </>
  )
}
