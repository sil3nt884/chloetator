const mongoose = require('mongoose');
const { BookIngModel } = require('../models/BookingModel')
const {v4} = require('uuid')


const dbConnected = (db) => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            if (db.connection.readyState) {
                resolve()
            } else {
                await dbConnected(db)
            }

        }, 100)
    })
}



const saveBooking = async (booking) => {

    await dbConnected(mongoose)
    const bookingDoc = new BookIngModel(booking)
    bookingDoc._id = v4()
    await bookingDoc.save()

}

module.exports = {
    saveBooking
}
