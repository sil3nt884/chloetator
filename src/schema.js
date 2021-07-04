const { SchemaComposer } = require( 'graphql-compose');

const schemaComposer = new SchemaComposer();

const { BookingQuery, BookingMutation}  = require('./schema/Booking')
const { ReviewMutation, ReviewQuery}  = require('./schema/Review')


schemaComposer.Query.addFields({
    ...BookingQuery,
    ...ReviewQuery
});

schemaComposer.Mutation.addFields({
    ...BookingMutation,
    ...ReviewMutation
})

module.exports = schemaComposer.buildSchema()
