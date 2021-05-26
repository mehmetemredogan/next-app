import nookies from "nookies"
import SetCookie from "../cookie/set";

let cookieData = {
    key: "theme",
    value: "",
    time: 90,
    path: "/",
    domain: process.env.COOKIE_DOMAIN,
    sameSite: "Lax"
}

function SetupTheme(ctx, defaultTheme) {
    // Get Cookies
    let cookies         = nookies.get(ctx)

    cookieData.value    = defaultTheme

    if (typeof cookies.theme !== 'undefined') {
        switch (cookies.theme) {
            case 'light':
                cookieData.value    = "light"
                break
            case 'dark':
                cookieData.value    = "dark"
                break
        }
    }

    SetCookie(ctx, cookieData.key, cookieData.value, cookieData.time, cookieData.path, cookieData.domain, cookieData.sameSite)

    if (typeof cookies.themeChange === 'undefined') {
        SetCookie(ctx, "themeChange", "auto", cookieData.time, cookieData.path, cookieData.domain, cookieData.sameSite)
    }

    return cookieData.value
}

export default SetupTheme