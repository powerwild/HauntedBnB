import { FormModal } from "../../context/Modal";
import { useState } from "react";
import DeleteHauntForm from "./DeleteHauntForm";
import './DeleteHaunt.css';


const DeleteHauntModal = ({spot}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='delete-haunt-btn' onClick={() => setRenderModal(true)}>Delete Haunt</button>
            {renderModal ? (
                <FormModal id='delete-haunt-sizing-id' onClose={() => setRenderModal(false)}>
                    <DeleteHauntForm spot={spot} />
                </FormModal>
                ) : null
            }
        </>
    )
}

export default DeleteHauntModal;
