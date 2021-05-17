import nookies from "nookies"

function DetectTheme(ctx, defaultTheme) {
    // Get Cookies
    let cookies = nookies.get(ctx)

    if (typeof cookies.theme === 'undefined') {
        return defaultTheme
    } else {
        switch (cookies.theme) {
            case 'light':
                return 'light'
            case 'dark':
                return 'dark'
            default:
                return defaultTheme
        }
    }
}

export default DetectTheme