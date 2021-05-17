import nookies from "nookies"

function SetupTheme(ctx, defaultTheme) {
    // Get Cookies
    let cookies = nookies.get(ctx)

    if (typeof cookies.theme === 'undefined') {
        setThemeCookie(ctx, defaultTheme)
    } else {
        switch (cookies.theme) {
            case 'light':
                setThemeCookie(ctx, 'light')
                return 'light'
            case 'dark':
                setThemeCookie(ctx, 'dark')
                return 'dark'
            default:
                setThemeCookie(ctx, defaultTheme)
                return defaultTheme
        }
    }
}

function setThemeCookie(ctx, theme) {
    nookies.set(ctx, 'theme', theme,
        {
            maxAge: 90 * 24 * 60 * 60,          // 90 Days
            path: '/',                          // Main Path
            domain: process.env.COOKIE_DOMAIN,  // Cookie Somain
            sameSite: 'Lax'                     // All Subdomains
        }
    )
}

export default SetupTheme