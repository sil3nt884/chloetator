const { ReviewTC } = require('../models/ReviewModel')

const ReviewQuery = {
    reviewFindOne: ReviewTC.mongooseResolvers.findOne(),
    allReviews: ReviewTC.mongooseResolvers.findMany()

};

const ReviewMutation = {
    ReviewsCreateOne: ReviewTC.mongooseResolvers.createOne()
};

module.exports = { ReviewQuery,  ReviewMutation  }
