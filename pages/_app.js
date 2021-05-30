// Global CSS Import
import "../styles/globals.css"

// nprogress Import
// https://github.com/rstacruz/nprogress
import "../styles/nprogress.css"
import nprogress from "nprogress"

// balloon.css Import
// https://github.com/kazzkiq/balloon.css
import "../styles/balloon.css"

import React from "react"
import Router from "next/router"

import GetBrowserTheme from "../helpers/theme/browser"

Router.onRouteChangeStart = url => {
    nprogress.start()
}

Router.onRouteChangeComplete = () => nprogress.done()

Router.onRouteChangeError = () => nprogress.done()

const App = ({Component, pageProps}) => {
    React.useEffect(() => {
        GetBrowserTheme()
    })

    return (
        <Component {...pageProps} />
    )
}

App.getInitialProps = async ({ ctx }) => {
    return {
        pageProps: {
            "ssr": true
        }
    }
}

export default App