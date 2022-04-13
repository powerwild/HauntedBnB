import { FormModal } from "../../context/Modal";
import { useState } from "react";
import DeleteReviewForm from "./DeleteReviewForm";
import './DeleteReview.css';

const DeleteReviewModal = ({reviewId}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='delete-review-btn' onClick={() => setRenderModal(true)}>Delete Review</button>
            {renderModal ? (
                <FormModal id='delete-review-sizing-id' onClose={() => setRenderModal(false)}>
                    <DeleteReviewForm  onClose={() => setRenderModal(false)} reviewId={reviewId}/>
                </FormModal>
                ) : null
            }
        </>
    )
}



export default DeleteReviewModal;
