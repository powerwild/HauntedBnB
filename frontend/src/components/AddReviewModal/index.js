import AddReviewForm from "./AddReviewForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";
import './AddReview.css'


const AddReviewModal = ({ oldReview, id}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='add-review-btn' onClick={() => setRenderModal(true)}>Add Review</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <AddReviewForm onClose={() => setRenderModal(false)} oldReview={oldReview} id={id}/>
                </FormModal>
                ) : null
            }
        </>
    )
}

export default AddReviewModal;
