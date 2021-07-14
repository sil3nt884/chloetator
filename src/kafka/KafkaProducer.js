const {Kafka} = require('kafkajs')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

module.exports = async (body) => {


    const producer = kafka.producer()
    await producer.connect()
    const mutation = body.mutation

    await producer.send({
        topic: 'bookings',
        messages: [{
            value: mutation
        }],
    })

}
