import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
//STYLES
//FONT
import { Lato } from '@next/font/google'
const lato = Lato({ subsets: ['latin'], weight: '400' })
//NEXT
import Head from 'next/head'
import NavFooterLayout from '@/layouts/NavFooterLayout'

const Ourservices: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Bk Law Firm Our Services page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={"text-3xl " + lato.className}>Our Services</h1>
      </main>
    </>
  )
}

Ourservices.getLayout = function getLayout(page: ReactElement) {
  return <NavFooterLayout>{page}</NavFooterLayout>
}

export default Ourservices
