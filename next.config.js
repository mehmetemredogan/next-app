const mode  = process.env.NODE_ENV === 'production'

module.exports = {
    poweredByHeader: false,
    assetPrefix: mode ? 'http://localhost:3000' : '', // CDN URL
    compress: false, // Custom Server Mode Error Fix
    publicRuntimeConfig: {
        cookieDomain: process.env.COOKIE_DOMAIN,
    }
}