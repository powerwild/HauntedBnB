import { useSelector } from 'react-redux';
import AddReviewModal from '../AddReviewModal';
import DeleteReviewModal from './DeleteReviewModal';
import EditReviewModal from '../EditReviewModal';
import './Reviews.css';
import { useEffect, useState } from 'react';



const Reviews = ({id, user}) => {
    const reviews = useSelector(state => state.reviews);
    const [ currSpotId, setCurrSpotId ] = useState(id);
    const [ reviewsArray, setReviewsArray ] = useState([]);
    useEffect(() => {
        setReviewsArray(Object.values(reviews));
    }, [reviews])

    return reviews && (
        <div className='reviews-div'>
            <AddReviewModal id={currSpotId} />
            {reviewsArray.map((review, i) => {
                if (review.spotId === id) {
                    return (
                    <div className='review-div' key={i}>
                        <p>{review.review}</p>
                        {user.user.id === review.userId && (
                            <div className='edit-delete-div'>
                                <EditReviewModal oldReview={review}/>
                                <DeleteReviewModal reviewId={review.id} />
                            </div>
                        )}
                    </div>
                )}
            })}
        </div>
    )
}

export default Reviews;
