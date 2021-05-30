import React from "react"
import Document, {Head, Html, Main, NextScript} from "next/document"

import SetupTheme from "../helpers/theme/setup"
import SetupLanguage from "../helpers/language/setup"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps  = await Document.getInitialProps(ctx)

        let acceptLanguage  = process.env.DEFAULT_LANGUAGE
        if (ctx.req !== undefined) {
            acceptLanguage  = ctx.req.headers["accept-language"] ? ctx.req.headers["accept-language"] : process.env.DEFAULT_LANGUAGE
        }

        let theme           = SetupTheme(ctx, process.env.DEFAULT_THEME),
            language        = SetupLanguage(ctx, acceptLanguage)

        return {
            ...initialProps,
            data: {
                language,
                theme: theme
            }
        }
    }

    render() {
        let data = this.props.data

        return (
            <Html lang={data.language.language} dir={data.language.direction}>
                <Head />
                <body className={"layout subpixel-antialiased " + data.theme}>
                <div className={"min-h-screen bg-white dark:bg-black"}>
                    <Main />
                    <NextScript />
                </div>
                </body>
            </Html>
        )
    }
}


export default MyDocument