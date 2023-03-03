import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
//STYLES
//FONT
import { Lato } from '@next/font/google'
const lato = Lato({ subsets: ['latin'], weight: '400' })
//NEXT
import Head from 'next/head'
import NavFooterLayout from '@/layouts/NavFooterLayout'
import Welcome from '@/components/home/Welcome'
import Features from '@/components/home/Features'

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
        <Features />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavFooterLayout>{page}</NavFooterLayout>
}

export default Home
