import GetCookie from "../cookie/get"
import SetCookie from "../cookie/set";

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function BrowserTheme() {
    let activeTheme     = GetCookie("theme"),
        manualChange    = GetCookie("themeChange")

    let domain      = publicRuntimeConfig.cookieDomain

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (activeTheme !== "dark") {
            if (manualChange !== "manual") {
                console.log("dark")
                SetCookie(null, "theme", "dark", 90, "/", domain, "Lax")
                ChangeClass("light","dark")
            }
        }
    } else {
        if (activeTheme === "dark") {
            if (manualChange !== "manual") {
                SetCookie(null, "theme", "light", 90, "/", domain, "Lax")
                ChangeClass("dark","light")
            }
        }
    }
}

function ChangeClass(before, after) {
    let body    = document.body;
    body.classList.remove(before)
    body.classList.add(after)
}

export default BrowserTheme