import { Fragment } from 'react'
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
const Navbar :React.FC<IProps> = ({data}) => {
  return (
    <Disclosure as="nav" className={styles.nav}>
      {({ open }) => (
        <>
          <div className="w-full px-[48px] mx-auto">
            <div className={incorporateClasses([layoutStyles.x__between]) + " h-16 "}>
              <Link href={"#welcome"}>
                <div className="flex items-center">
                  <Image src={data.logo.url||CompanyLogoPath} alt="logo" width={100} height={200} />
                </div>
              </Link>


              <div className="hidden md:block">
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
                      {data[item.href.replace('#','')] || item.name}
                    </Link>
                  ))}


                </div>
              </div>

              <ul className="flex justify-center">
                {data.items.map((item: any) => (
                <li className="flex justify-center items-center bg-silver h-[35px] w-[35px] rounded-[5px] mr-[10px]">
                  <a href={item.address} target='_blank'>
                  {selectIcon(item.icon)}
                  </a>
                </li>
                ))}
              </ul>



              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? <div>open</div> : <div>close</div>}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}

export { Navbar }
