
const http2 = require('http2');
const koa = require('koa')
const fs = require('fs')
const serve = require('koa-static')
const { ApolloServer } = require('apollo-server-koa');
const graphqlSchema = require('./schema')
const mongoose = require('mongoose')
const auth = require('./auth/auth')
const cron = require('node-cron')
const configHelper = require('./config')


async function run () {

   const config = configHelper().getConfig()

    cron.schedule('0 0 * * *', async () => {
      await auth.generatePassword()
    }, {});

    await auth.generatePassword();
    await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        user: config.dbUser,
        pass: config.dbPassword,
    });

    const options = {
        key: fs.readFileSync('private.key'),
        cert: fs.readFileSync('cert.crt'),
        allowHTTP1: true
    };


    const app = new koa();

    const REACT_ROUTER_PATHS = [
        '/reviews',
        '/bookings',
        '/home',
        '/manage'
    ];

    app.use(async (ctx, next) => {
            if (REACT_ROUTER_PATHS.includes(ctx.request.path)) {
                ctx.request.path = '/';
            }
            await next();
        })


    app.use(async (ctx, next) => {
        const accpetedIPs = config.acceptedIPs
        const ip =ctx.request.ip
        const url = ctx.request.url
        if(accpetedIPs.filter(address => ip === address).length >0 && url === '/password') {
            ctx.body = auth.authObject.dbPassword
        }
        else if(url === '/password'){
            ctx.body = 'not allowed'
            ctx.status = 403
        }
        await next();

    })


    app.use(serve( "src/build")); //serve the build directory


    const graphqlServer = new ApolloServer({
        schema: graphqlSchema,
        context: (req)=> {
            auth.setMatch(req.ctx.request.header.password)
        }


    });
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app , path:"/graphql" });


    const server = http2.createSecureServer(options, app.callback());
    server.listen(443)
    console.log('Server Ready and Listening on 443')


    process.on('exit', ()=> {
        mongoose.disconnect()
    });
    process.on('SIGINT', ()=> mongoose.disconnect());
}

run()
