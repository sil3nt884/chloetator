const {BookingTC, BookingModel} = require('../models/BookingModel')
const auth = require('../auth/auth')


const BookingQuery = {
    bookingFindOne: BookingTC.mongooseResolvers.findOne(),
    allBookings: BookingTC.mongooseResolvers.findMany()

};


function validateUpdate(resolvers) {
    Object.keys(resolvers).forEach((k) => {
        resolvers[k] = resolvers[k].wrapResolve(next => async rp => {
            rp.beforeRecordMutate = async function (doc) {
                if(!auth.authObject.isMatch) {
                    throw new Error("Not authenticated ")
                }
                if (doc && doc._id) {
                    const model = BookingModel.findById(doc._id)
                    const existingDoc = await model.exec()
                    const isComplete = existingDoc.state === 'complete'
                    if (isComplete) {
                        throw new Error('Booking is already completed state can no longer be changed!');
                    } else {
                        return doc
                    }

                } else {
                    throw new Error('Booking does not exist!');
                }
            }


            return next(rp)
        })
    })
    return resolvers
}

const BookingMutation = {
    bookingCreateOne: BookingTC.mongooseResolvers.createOne(),
    ...validateUpdate({
        updateBookingOne: BookingTC.mongooseResolvers.updateOne()
    })

}

module.exports = {BookingQuery, BookingMutation}
