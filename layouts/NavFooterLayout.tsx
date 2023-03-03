import React, { FC } from 'react'
import { Navbar } from '@/widgets/navbar/Navbar'
import { Footer } from '@/widgets/footer/Footer'

interface Props {
  children?: React.ReactNode
}

const NavFooterLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-amber-700">{children}</main>
      <Footer />
    </>
  )
}

export default NavFooterLayout
