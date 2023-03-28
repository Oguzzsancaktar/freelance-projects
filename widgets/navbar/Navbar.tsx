import { Fragment, useState } from 'react'
import Image from 'next/image'
// Constants.
import { CompanyLogoPath } from '@/constant/imagePaths'
//Libs.
import { Disclosure } from '@headlessui/react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Navbar.module.css'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
import { selectIcon } from '@/utils/selectIconUtil'
import Link from 'next/link'
import { navigation } from '@/constant/navigation'





function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface IProps {
  data: any
}
const Navbar: React.FC<IProps> = ({ data }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  if (!data) {
    return <div>...</div>
  }

  return (
    <Disclosure as="nav" className={styles.nav}>
      {({ open }) => (
        <>
          <div className={'fixed top-0 left-0 w-screen h-screen bg-codGray flex items-center justify-center duration-2000 ' + (mobileMenuOpen ? "" : "top-[-100%]")} onClick={() => setMobileMenuOpen(false)} >
            <div className='absolute top-[10rem]'>
              <Link href={"#welcome"} onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center">
                  <Image src={data?.logo.url || CompanyLogoPath} alt="logo" width={100} height={200} />
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-baseline " onClick={() => setMobileMenuOpen(false)}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={incorporateClasses([
                    (item.current ? 'text-white' : 'text-white hover:text-white'),
                    'py-[15px] ', textStyles.text__26,
                  ])}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {data[item.href.replace('#', '')] || item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full px-[5rem] mx-auto">
            <div className={incorporateClasses([layoutStyles.x__between]) + " h-16 "}>
              <Link href={"#welcome"}>
                <div className="flex items-center">
                  <Image src={data?.logo.url || CompanyLogoPath} alt="logo" width={100} height={200} />
                </div>
              </Link>

              <div className="block 1000:hidden">
                <div className="flex items-baseline ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={incorporateClasses([
                        (item.current ? 'text-white' : 'text-white hover:text-white'),
                        'px-[15px] ', textStyles.text__20,
                      ])}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {data[item.href.replace('#', '')] || item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className='h-full text-white' onClick={() => setMobileMenuOpen(true)}>
                {selectIcon('hambuger')}
              </div>
            </div>
          </div>
        </>
      )
      }
    </Disclosure >
  )
}

export { Navbar }
