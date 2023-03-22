import { ReactElement, useEffect, useRef } from 'react'
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
import Blogs from '@/components/home/Blogs'
import Achivements from '@/components/home/Achivements'
import { useRouter } from 'next/router'

import map from 'lodash/map'

import {createClient} from '../prismicio'



const Home: NextPageWithLayout<{dataMap:any}> = ({dataMap}) => {
  const welcomeRef = useRef<any>();
  const aboutRef = useRef<any>();
  const featuresRef = useRef<any>();
  const blogsRef = useRef<any>();
  const testimonialsRef = useRef<any>();
  const achivementsRef = useRef<any>();
  const faqRef = useRef<any>();
  const contactRef = useRef<any>();


  const router = useRouter();

  console.log("dataMap",dataMap);

   useEffect(() => {
    const onHashChangeStart = (url: string) => {
      let tempRef;

      switch (url) {
        case '/#welcome':
          tempRef = welcomeRef;
          break;
        case '/#about':
          tempRef = aboutRef;
          break;
        case '/#features':
          tempRef = featuresRef;
          break;
        case '/#blogs':
          tempRef = blogsRef;
          break;
        case '/#testimonials':
          tempRef = testimonialsRef;
          break;
        case '/#achivements':
          tempRef = achivementsRef;
          break;
        case '/#faqs':
          tempRef = faqRef;
          break;
        case '/#contact':
          tempRef = contactRef;
          break;
        default:
          tempRef = welcomeRef;
          break;
      }

      tempRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);



  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Bk Law Firm home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div ref={welcomeRef} >
          <Welcome data={dataMap["welcome"]} />
        </div>

        {/* <Youtube /> */}

        <div ref={aboutRef} >
          <About  data={dataMap["about"]}/>
        </div>
        <div ref={featuresRef} >
          <Features  data={dataMap["features"]}/>
        </div>
        <div ref={blogsRef} >
          <Blogs data={dataMap["blogs"]} />
        </div>
        {/* <div ref={testimonialsRef} >
          <Testimonials />
        </div> */}
        <div ref={achivementsRef} >
          <Achivements data={dataMap["achivements"]} />
        </div>
        <div ref={faqRef} >
          <FAQ data={dataMap["faq"]} />
        </div>
        <div ref={contactRef} >
          <Contact data={dataMap["contact"]} />
        </div>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavFooterLayout>{page}</NavFooterLayout>
}

export default Home



export async function getStaticProps() {
  const client = createClient()
  const result = await client.getSingle("homepage")
  const {slices} = result.data

  const dataMap:any = {}


  map(slices, (slice) => {
    dataMap[slice.slice_type] = {items:slice.items,...slice.primary}
  })

  return {
    props: {
      dataMap,
    },
  }
}
