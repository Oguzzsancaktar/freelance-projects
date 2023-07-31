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

import { createClient } from '../prismicio'
import { YoutubeSlider } from '@/components/slider'
import { TestimonialsSlider } from '@/components/slider/testimonials'
import CalendlyAppointment from '@/components/appointment/CalendlyAppointment'



const Home: NextPageWithLayout<{ dataMap: any }> = ({ dataMap }) => {
  const welcomeRef = useRef<any>();
  const aboutRef = useRef<any>();
  const featuresRef = useRef<any>();
  const blogsRef = useRef<any>();
  const testimonialsRef = useRef<any>();
  const achivementsRef = useRef<any>();
  const faqRef = useRef<any>();
  const contactRef = useRef<any>();


  const router = useRouter();

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

      <div className='px-[5rem] '>
        <section ref={welcomeRef} >
          <Welcome data={dataMap["welcome"]} />
        </section>



        <section ref={aboutRef} >
          <About data={dataMap["about"]} />
        </section>

        <div ref={testimonialsRef} className='  w-full overflow-hidden items-center hidden 1000:flex'>
          <TestimonialsSlider />
        </div>

        <section ref={featuresRef} >
          <Features data={dataMap["features"]} />
        </section>
        <section ref={blogsRef} >
          <Blogs data={dataMap["blogs"]} />
        </section>
        {/* <section ref={testimonialsRef} >
          <Testimonials />
        </section> */}
        <section ref={achivementsRef} >
          <Achivements data={dataMap["achivements"]} />
        </section>
        <section ref={faqRef} >
          <FAQ data={dataMap["faq"]} />
        </section>
        <section ref={contactRef} >
          {/* <Contact data={dataMap["contact"]} /> */}
          <CalendlyAppointment />
        </section>


      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  const dataMap = page.props.dataMap;
  return <NavFooterLayout navData={dataMap["header"]} footerData={dataMap["footer"]}>{page}</NavFooterLayout>
}

export default Home



export async function getStaticProps() {
  const client = createClient()
  const result = await client.getSingle("homepage")
  const { slices } = result.data

  const dataMap: any = {}


  map(slices, (slice) => {
    dataMap[slice.slice_type] = { items: slice.items, ...slice.primary }
  })

  return {
    props: {
      dataMap,
    },
  }
}
