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
        return setValidationErrors([]);
    }, [review])


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='add-review'>
                <textarea name='add-review' value={review} onChange={e => setReview(e.target.value)}/>
            </label>
            <button disabled={validationErrors.length > 0}>Edit</button>
        </form>
    )
}


export default EditReviewForm;
