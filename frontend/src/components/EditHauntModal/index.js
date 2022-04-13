import EditHauntForm from "./EditHauntForm.js";
import { FormModal } from "../../context/Modal";
import { useState } from "react";
import './EditHaunt.css';


const EditHauntModal = ({spot}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='edit-haunt-btn' onClick={() => setRenderModal(true)}>Update Haunt</button>
            {renderModal && (
                <FormModal id='edit-haunt-sizing-id' onClose={() => setRenderModal(false)}>
                    <EditHauntForm spot={spot} onClose={() => setRenderModal()}/>
                </FormModal>
            )
            }
        </>
    )
}

export default EditHauntModal;
