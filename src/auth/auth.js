const {createHmac} = require('crypto');


const authObject = {
    dbPassword: ''
}


module.exports = {
     authObject,
    generatePassword: async () => {
       authObject.dbPassword = createHmac('sha256', Date.now() + '' + Math.random() + 'password').digest('hex')
    },
    setMatch : (password) =>  {
        authObject.isMatch = password === authObject.dbPassword
    }

}
