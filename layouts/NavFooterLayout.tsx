import React, { FC } from 'react'
import { Navbar } from '@/widgets/navbar/Navbar'
import { Footer } from '@/widgets/footer/Footer'

interface Props {
  navData?: any
  footerData?: any
  children?: React.ReactNode
}

const NavFooterLayout: FC<Props> = ({ children,navData,footerData }) => {
  return (
    <>
      <Navbar data={navData} />
      <main className="bg-black">{children}</main>
      <Footer data={footerData} />
    </>
  )
}

export default NavFooterLayout
