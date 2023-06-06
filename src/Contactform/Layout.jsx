import React from 'react'
import { Helmet } from 'react-helmet'
const Layout = ({title, children}) => {
  return (
    <div>
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href="https://res.cloudinary.com/dbszbhg8n/image/upload/v1680347659/Screenshot_2023-04-01_163808_rqjrag.png" type="image/png" sizes="16x16" />
        </Helmet>
        <div>{children}</div>
    </div>
  )
}

export default Layout
