import { deleteHauntThunk } from "../../store/haunts";
import { useDispatch } from "react-redux";

const DeleteHauntForm = ({spot}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteHauntThunk(spot.id))
    }

    return (
        <form onSubmit={handleSubmit} className='delete-haunt-form'>
            <label htmlFor='delete-haunt-message'>Do you really wish to delete your haunt?</label>
            <button className="delete-haunt-form-btn">DELETE</button>
        </form>
    )
}

export default DeleteHauntForm;
