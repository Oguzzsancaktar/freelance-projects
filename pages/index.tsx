import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
//STYLES
//FONT
import { Lato } from '@next/font/google'
const lato = Lato({ subsets: ['latin'], weight: '400' })
//NEXT
import Head from 'next/head'
// Layouts.
import NavFooterLayout from '@/layouts/NavFooterLayout'
// Components.
import Welcome from '@/components/home/Welcome'
import Features from '@/components/home/Features'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/home/Contact'
import FAQ from '@/components/home/FAQ'
import Youtube from '@/components/home/Youtube'


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Bk Law Firm home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Welcome />
        <About />
        <Features />
        <Testimonials />
        <Contact />
        <FAQ />
        <Youtube />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavFooterLayout>{page}</NavFooterLayout>
}

export default Home
