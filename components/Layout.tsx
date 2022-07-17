import React from 'react'
import Header from './Header'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div>
        <Header></Header>
        {children}
    </div>
  )
}

export default Layout