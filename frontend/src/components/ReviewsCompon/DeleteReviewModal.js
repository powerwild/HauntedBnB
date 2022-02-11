import { FormModal } from "../../context/Modal";
import { useState } from "react";
import DeleteReviewForm from "./DeleteReviewForm";


const DeleteReviewModal = ({reviewId}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='delete-haunt-btn' onClick={() => setRenderModal(true)}>Delete Review</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <DeleteReviewForm  onClose={() => setRenderModal(false)} reviewId={reviewId}/>
                </FormModal>
                ) : null
            }
        </>
    )
}



export default DeleteReviewModal;
