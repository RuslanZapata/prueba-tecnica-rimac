
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import { ReactNode, FC } from 'react'

type Props = { children: ReactNode }

const LayoutPrimary:FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutPrimary