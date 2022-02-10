import EditHauntForm from "./EditHauntForm.js";
import { FormModal } from "../../context/Modal";
import { useState } from "react";



const EditHauntModal = ({spot}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='edit-haunt-btn' onClick={() => setRenderModal(true)}>Update Haunt</button>
            {renderModal && (
                <FormModal onClose={() => setRenderModal(false)}>
                    <EditHauntForm spot={spot} onClose={() => setRenderModal()}/>
                </FormModal>
            )
            }
        </>
    )
}

export default EditHauntModal;
