import nookies from "nookies"

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
        switch (cookies.theme) {
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

    return out
}

export default DetectLanguage