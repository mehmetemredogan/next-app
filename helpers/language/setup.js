import nookies from "nookies"
import ALParser from "accept-language-parser"

import SetCookie from "../cookie/set"

let out = {
        code: 'tr-TR',
        language: 'tr',
        direction: 'ltr',
        status: 'not-detected'
    },
    cookieData = {
        key: "language",
        time: 90,
        path: "/",
        domain: process.env.COOKIE_DOMAIN,
        sameSite: "Lax"
    }

function SetupLanguage(ctx, acceptLanguage) {
    // Get Cookies
    let cookies = nookies.get(ctx)

    if (cookies.language !== undefined) {
        switch (cookies.language) {
            case "tr-TR":
                out = {
                    code: 'tr-TR',
                    language: 'tr',
                    direction: 'ltr',
                    status: 'accepted'
                }
                break
            case "en-US":
                out = {
                    code: 'en-US',
                    language: 'en',
                    direction: 'ltr',
                    status: 'accepted'
                }
                break
        }
    } else {
        // Accept-Language Parser
        let language    = ALParser.pick(
            ['tr-TR', 'en-US', 'en-GB', 'tr', 'en'],
            acceptLanguage
        )

        // Check Data
        if (typeof language === "string") {
            if (language.length > 1) {
                switch (language) {
                    case 'tr':
                    case 'tr-TR':
                        out = {
                            code: 'tr-TR',
                            language: 'tr',
                            direction: 'ltr',
                            status: 'accepted'
                        }
                        break
                    case 'en':
                    case 'en-US':
                    case 'en-GB':
                        out = {
                            code: 'en-US',
                            language: 'en',
                            direction: 'ltr',
                            status: 'accepted'
                        }
                        break
                }
            }
        }

        SetCookie(ctx, cookieData.key, out.code, cookieData.time, cookieData.path, cookieData.domain, cookieData.sameSite)
    }

    return out
}

export default SetupLanguage