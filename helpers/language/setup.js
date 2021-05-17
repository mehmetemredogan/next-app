import nookies from "nookies"
import ALParser from "accept-language-parser"

let out = {
    code: 'tr-TR',
    language: 'tr',
    direction: 'ltr',
    status: 'not-detected'
}

function SetupLanguage(ctx, acceptLanguage) {
    // Get Cookies
    let cookies = nookies.get(ctx)

    // Accept-Language Parser
    let language    = ALParser.pick(
        ['tr-TR', 'en-US', 'en-GB', 'tr', 'en'],
        acceptLanguage
    )

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

    if (typeof cookies.language === 'undefined') {
        setLanguageCookie(ctx, out.code)
    } else {
        switch (cookies.language) {
            case 'tr-TR':
                setLanguageCookie(ctx, 'tr-TR')
                break
            case 'en-US':
                setLanguageCookie(ctx, 'en-US')
                break
            default:
                setLanguageCookie(ctx, out.code)
        }
    }

    return out
}

function setLanguageCookie(ctx, theme) {
    nookies.set(ctx, 'language', theme,
        {
            maxAge: 90 * 24 * 60 * 60,          // 90 Days
            path: '/',                          // Main Path
            domain: process.env.COOKIE_DOMAIN,  // Cookie Somain
            sameSite: 'Lax'                     // All Subdomains
        }
    )
}

export default SetupLanguage