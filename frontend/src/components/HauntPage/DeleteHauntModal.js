import { FormModal } from "../../context/Modal";
import { useState } from "react";
import DeleteHauntForm from "./DeleteHauntForm";



const DeleteHauntModal = ({spot}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='delete-haunt-btn' onClick={() => setRenderModal(true)}>Delete Haunt</button>
            {renderModal && (
                <FormModal onClose={() => setRenderModal(false)}>
                    <DeleteHauntForm spot={spot} />
                </FormModal>
            )}
        </>
    )
}

export default DeleteHauntModal;
