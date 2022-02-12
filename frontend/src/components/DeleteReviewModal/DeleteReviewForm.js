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
        <form onSubmit={handleSubmit}>
            <label>Do you really want to delete your review?</label>
            <button>DELETE</button>
        </form>
    )
}

export default DeleteReviewForm;
