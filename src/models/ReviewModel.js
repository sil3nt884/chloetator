const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {  composeMongoose } = require('graphql-compose-mongoose');


const ReviewSchema = new Schema({
    reviewId: String,
    review: String,
    name: String,
});


const ReviewModel = mongoose.model('Review', ReviewSchema);
const  ReviewTC =  composeMongoose(ReviewModel);

module.exports =  {
    ReviewModel,
    ReviewTC
}
