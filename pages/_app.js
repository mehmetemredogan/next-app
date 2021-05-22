// Global CSS Import
import "../styles/globals.css"

// nprogress Import
// https://github.com/rstacruz/nprogress
import "../styles/nprogress.css"
import nprogress from "nprogress"

// balloon.css Import
// https://github.com/kazzkiq/balloon.css
import "../styles/balloon.css"

import React from "react";
import Router from "next/router";

import DetectLanguage from "../helpers/language/detect";
import DetectTheme from "../helpers/theme/detect";
import DetectIP from "../helpers/ip/detect";

Router.onRouteChangeStart = url => {
    nprogress.start()
}

Router.onRouteChangeComplete = () => nprogress.done()

Router.onRouteChangeError = () => nprogress.done()

const App = ({Component, pageProps}) => {
    return (
        <Component {...pageProps} />
    )
}

App.getInitialProps = async ({ ctx }) => {
    let browser         = ctx.req.headers["user-agent"] ? ctx.req.headers["user-agent"] : "N/A",
        secCHua         = ctx.req.headers["sec-ch-ua"] ? ctx.req.headers["sec-ch-ua"] : "N/A",
        acceptLanguage  = ctx.req.headers["accept-language"] ? ctx.req.headers["accept-language"] : process.env.DEFAULT_LANGUAGE,
        ip              = DetectIP(ctx),
        method          = ctx.req.method ? ctx.req.method : (ctx.req.headers[":method"] ? ctx.req.headers[":method"] : "N/A"),
        path            = ctx.req.url,
        theme           = DetectTheme(ctx, process.env.DEFAULT_THEME),
        language        = DetectLanguage(ctx, acceptLanguage)

    return {
        pageProps: {
            browser: browser,
            secCHua: secCHua,
            acceptLanguage: acceptLanguage,
            ip: ip,
            pagePath: path,
            method: method,
            language,
            theme: theme
        }
    }
}

export default App