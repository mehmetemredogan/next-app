import DetectIP from "../ip/detect"
import DetectTheme from "../theme/detect"
import DetectLanguage from "../language/detect"

async function ServerSideSetup(props) {
    let browser         = props.req.headers["user-agent"] ? props.req.headers["user-agent"] : "N/A",
        secCHua         = props.req.headers["sec-ch-ua"] ? props.req.headers["sec-ch-ua"] : "N/A",
        acceptLanguage  = props.req.headers["accept-language"] ? props.req.headers["accept-language"] : process.env.DEFAULT_LANGUAGE,
        ip              = DetectIP(props),
        method          = props.req.method ? props.req.method : (props.req.headers[":method"] ? props.req.headers[":method"] : "N/A"),
        path            = props.req.url,
        theme           = DetectTheme(props, process.env.DEFAULT_THEME),
        language        = DetectLanguage(props, acceptLanguage)

    return {
        browser: browser,
        secCHua: secCHua,
        acceptLanguage: acceptLanguage,
        ip: ip,
        pagePath: path,
        method: method,
        language,
        theme: theme
    }
}

export default ServerSideSetup