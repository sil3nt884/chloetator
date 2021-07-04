const fs = require('fs')



module.exports = async (ctx, html) => {
    const { request, response } = ctx
    const path = `src/build/${html.filter(e => e.indexOf('index.html') > -1)[0]}`
    const htmlBody = fs.readFileSync(path, 'utf-8')
    response.body = htmlBody
    response.status = 202
};
