import nookies from "nookies"

function SetCookie(ctx, key, value, time, path, domain, sameSite) {
    nookies.set(ctx, key, value,
        {
            maxAge: time * 24 * 60 * 60,    // Days
            path: path,                     // Main Path
            domain: domain,                 // Cookie Somain
            sameSite: sameSite              // All Subdomains
        }
    )
}

export default SetCookie