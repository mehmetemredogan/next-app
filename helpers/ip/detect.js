// Note: This page contains untested functions. Please test
// it before using it in a production environment.

let XRealIP         = "127.0.0.1",
    XForwardedFor   = "127.0.0.1"

function DetectIP(ctx) {
    if (ctx.req !== undefined) {
        XRealIP         = ctx.req.headers["x-real-ip"] ? ctx.req.headers["x-real-ip"] : XRealIP
        XForwardedFor   = ctx.req.headers["x-forwarded-for"] ? ctx.req.headers["x-forwarded-for"] : XForwardedFor

        if (XRealIP === "127.0.0.1") {
            XRealIP = XForwardedFor
        }
    }

    return XRealIP
}

export default DetectIP