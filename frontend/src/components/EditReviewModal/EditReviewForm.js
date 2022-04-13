import { useEffect, useState } from "react";
import {  putRevThunk } from '../../store/reviews';
import { useDispatch } from 'react-redux';



const EditReviewForm = ({onClose, oldReview}) => {
    const [ review, setReview ] = useState(oldReview.review);
    const [ validationErrors, setValidationErrors ] = useState([]);
    const dispatch = useDispatch()


    const handleSubmit =  (e) => {
        e.preventDefault();
        e.stopPropagation();
        return dispatch(putRevThunk({review, id: oldReview.id})).then(() => onClose());
        // return dispatch(putRevThunk({review, id: oldReview.id}));
    }

    useEffect(() => {
        let errors = [];
        if (review.length < 10) errors.push('Please provide a decent review.');
        setValidationErrors(errors);
    }, [review])


    return (
        <form className="edit-review-form" onSubmit={handleSubmit}>
            <ul>
                {validationErrors?.map((err, i) => (
                    <li key={i} className='validation-error-message'>{err}</li>
                ))}
            </ul>
            <label className="edit-form-field" htmlFor='edit-review'>
                Review
                <textarea className="edit-field" name='edit-review' value={review} onChange={e => setReview(e.target.value)}/>
            </label>
            <button className="edit-review-form-btn" disabled={validationErrors.length > 0}>Edit</button>
        </form>
    )
}


export default EditReviewForm;
