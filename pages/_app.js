import React from 'react'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1 className="bg-green-400 md:bg-red-900 lg:bg-purple-800 p-8">MyApp</h1>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp