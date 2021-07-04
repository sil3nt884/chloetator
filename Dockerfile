FROM node:14.17.1
COPY src src
COPY package.json package.json
COPY nodeHttpToRequest.js nodeHttpToRequest.js
COPY cert.crt cert.crt
COPY private.key private.key
COPY public.key public.key
RUN npm i
RUN cp nodeHttpToRequest.js  node_modules/apollo-server-core/dist/nodeHttpToRequest.js
EXPOSE 443

CMD npm start
