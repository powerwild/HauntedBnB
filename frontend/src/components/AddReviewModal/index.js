import AddReviewForm from "./AddReviewForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";
import { Redirect } from "react-router-dom";


const AddReviewModal = () => {


    return (
        <>
            <button className='add-review-btn' onClick={() => setRenderModal(true)}>Add New Haunt</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <NewHauntForm onClose={() => setRenderModal(false)} />
                </FormModal>
                ) : null
            }
        </>
    )
}
