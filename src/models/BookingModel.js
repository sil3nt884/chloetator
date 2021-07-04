const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {  composeMongoose } = require('graphql-compose-mongoose');

const BookSchema = new Schema({
    bookingId: {
        type : String ,
        unique : true
    },
    email: String,
    name: String,
    request: String,
    state: String,
});


const BookingModel = mongoose.model('Booking', BookSchema);
const BookingTC =  composeMongoose(BookingModel);


module.exports =  {
    BookingModel,
    BookingTC
}

// mutation CreateBooking {
//     bookingCreateOne(record: { bookingId: "1", email: "mmm", request: "rrr", state: "placed"})  {
//         record {
//             bookingId
//             email
//             request
//             state
//         }
//
//     }
// }

