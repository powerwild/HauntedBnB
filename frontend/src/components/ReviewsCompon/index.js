import { useSelector } from 'react-redux';
import { postRevThunk, putRevThunk, deleteRevThunk } from '../../store/reviews';

import './Reviews.css';



const Reviews = ({id, user}) => {
    const reviews = useSelector(state => state.reviews);
    console.log(reviews)

    return reviews && (
        <div className='reviews-div'>
            <button>Add Review</button>
            {Object.values(reviews)?.map((review, i) => {
                if (review.spotId === id) {
                    return (
                    <div className='review-div' key={i}>
                        <p>{review.review}</p>
                        {user.user.id === review.userId && (
                            <div className='edit-delete-div'>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        )}
                    </div>
                )}
            })}
        </div>
    )
}

export default Reviews;
