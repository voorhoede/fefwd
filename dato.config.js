const dotenv = require('dotenv-safe')
const fs = require('fs')

dotenv.config()

const distDir = `${__dirname}/dist`

module.exports = (dato, root, i18n) => {
  fs.writeFileSync(`${distDir}/_redirects`, redirectsToText(dato.redirects), 'utf8')
}

/**
 * Write redirects to text with 1 redirect per line
 * @see https://www.netlify.com/docs/redirects/
 */
function redirectsToText (redirects) {
  return redirects
    .map(redirect => `${redirect.from} ${redirect.to} ${redirect.statusCode}`)
    .join("\n")
}
