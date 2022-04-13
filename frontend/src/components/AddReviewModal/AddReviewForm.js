import { useEffect, useState } from "react";
import { postRevThunk } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";


const AddReviewForm = ({onClose, id}) => {
    const sessionUser = useSelector(state => state.session.user);
    const [ review, setReview ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newRev = await dispatch(postRevThunk(review, sessionUser.id, id));
        if (newRev?.errors) return setValidationErrors(newRev.errors);
        else return onClose();
    }

    useEffect(() => {
        let errors = [];
        if (review.length < 10) errors.push('Please provide a decent review.');
        setValidationErrors(errors);
    }, [review])


    return (
        <form className="add-review-form" onSubmit={handleSubmit}>
            <ul>
                {validationErrors?.map((err, i) => (
                        <li key={i} className='validation-error-message'>{err}</li>
                    ))}
            </ul>
            <label className="review-form-field" htmlFor='add-review'>
                Review
                <textarea className="review-field" name='add-review' value={review} onChange={e => setReview(e.target.value)}/>
            </label>
            <button className='add-review-form-btn' disabled={validationErrors.length > 0}>Add</button>
        </form>
    )
}


export default AddReviewForm;
