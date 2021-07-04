const selfsigned = require('selfsigned');
const fs = require('fs')


const pems = selfsigned.generate(null, { days: 365 });

fs.writeFileSync('./private.key', pems['private'])
fs.writeFileSync('./public.key', pems['public'])
fs.writeFileSync('./cert.crt', pems['cert'])
