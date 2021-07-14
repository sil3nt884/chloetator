const { Kafka } = require('kafkajs')
const fetch = require('node-fetch')
const { ApolloClient, InMemoryCache, gql,createHttpLink } = require( "@apollo/client");


const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const httpLink = createHttpLink({
    uri: "https://localhost/graphql",
    fetch: fetch
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const sendQuery = async (query) => {

    await client.mutate({
        mutation: gql`
      ${query}
    `,
    });
   console.log('sent query')

}

module.exports = async () => {
    const consumer = kafka.consumer({ groupId: 'bookings' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'bookings', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            await sendQuery(message.value.toString())

        },
    })
}


