import nookies from "nookies"
import HrefLang from "./hreflang";

let out = {
    code: 'tr-TR',
    language: 'tr',
    direction: 'ltr',
    status: 'not-detected'
}

function DetectLanguage(ctx) {
    // Get Cookies
    let cookies = nookies.get(ctx)

    if (typeof cookies.language !== 'undefined') {
        switch (cookies.language) {
            case 'tr-TR':
                out = {
                    code: 'tr-TR',
                    language: 'tr',
                    direction: 'ltr',
                    status: 'accepted'
                }
                break
            case 'en-US':
                out = {
                    code: 'en-US',
                    language: 'en',
                    direction: 'ltr',
                    status: 'accepted'
                }
                break
        }
    }

    // hreflang Detect
    let hreflang    = HrefLang(ctx.query)
    if (hreflang !== false) {
        out = hreflang
    }

    return out
}

export default DetectLanguage