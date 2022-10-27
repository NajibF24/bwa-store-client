import type { NextPage } from "next"
import { useEffect } from "react"
import AOS from "aos"
import NavBar from "../components/organisms/NavBar"
import MainBanner from "../components/organisms/MainBanner"
import TransactionStep from "../components/organisms/TransactionStep"
import FeaturedGame from "../components/organisms/FeaturedGame"
import Reached from "../components/organisms/Reached"
import Story from "../components/organisms/Story"
import Footer from "../components/organisms/Footer"
import Head from "next/head"

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>StoreGG - Get New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta property="og:image" content="https://imageurl" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <NavBar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
