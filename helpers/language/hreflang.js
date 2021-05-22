function HrefLang(query) {
    if (query.lang !== undefined) {
        switch (query.lang) {
            case "tr":
                return {
                    code: 'tr-TR',
                    language: 'tr',
                    direction: 'ltr',
                    status: 'hreflang'
                }
            case "en":
                return {
                    code: 'en-US',
                    language: 'en',
                    direction: 'ltr',
                    status: 'hreflang'
                }
            default:
                return false
        }
    } else {
        return false
    }
}

export default HrefLang