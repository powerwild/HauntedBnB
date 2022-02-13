import { useDispatch } from "react-redux";
import { deleteRevThunk } from "../../store/reviews";


const DeleteReviewForm = ({reviewId, onClose}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return dispatch(deleteRevThunk(reviewId)).then(() => onClose())
    }

    return (
        <form className="delete-review-form" onSubmit={handleSubmit}>
            <label className="delete-review-message">Do you really want to delete your review?</label>
            <button className="delete-review-form-btn">DELETE</button>
        </form>
    )
}

export default DeleteReviewForm;
