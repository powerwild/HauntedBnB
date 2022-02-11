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
        <form onSubmit={handleSubmit} className='delete-spot-modal'>
            <label htmlFor='check-deletion-request'>Do you really wish to delete your haunt?</label>
            <button>DELETE</button>
        </form>
    )
}

export default DeleteHauntForm;
