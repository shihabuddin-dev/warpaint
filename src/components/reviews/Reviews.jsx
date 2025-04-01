import React from 'react';

const Reviews = ({products}) => {
const reviewer= products.map(review=> review.reviews)
console.log(reviewer)

return(
    <div>
        <p>Hello </p>
    </div>
)
   
};

export default Reviews;