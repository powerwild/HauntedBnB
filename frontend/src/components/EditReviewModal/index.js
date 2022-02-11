import EditReviewForm from "./EditReviewForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";



const EditReviewModal = ({verb, oldReview, spotId, userId}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='add-review-btn' onClick={() => setRenderModal(true)}>Edit Review</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <EditReviewForm onClose={() => setRenderModal(false)} verb={verb} oldReview={oldReview}/>
                </FormModal>
                ) : null
            }
        </>
    )
}

export default EditReviewModal;
