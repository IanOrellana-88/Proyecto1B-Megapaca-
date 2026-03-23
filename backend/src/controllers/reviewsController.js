const reviewsController = {};

import reviewsModel from "../models/reviews.js"


//Select
reviewsController.getreviews= async (req, res) => {
    const reviews = await reviewsModel.find();
    res.json(reviews);
};


//Insert
reviewsController.insertReviews = async (req, res) => {
    const {idEmployee, idProducts, reviews, comment} = req.body;
     
    const newReview = new reviewsModel ({
        idEmployee,
        idProducts,
        reviews,
        comment,
    });

    await newReview.save();

    res.json({message: "Review saved"})
};


//Delete

reviewsController.deleteReview = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Review deleted"})
};




//Update

reviewsController.updateReview = async (req, res) => { 
    const {idEmployee, idProducts, reviews, comment} = req.body;
    
    await reviewsModel.findByIdAndUpdate(
        req.params.id,{
          idEmployee,
          idProducts,
          reviews,
          comment,
        },
        {new: true},
    );
    res.json({message: "Review updated"});
};


export default reviewsController;