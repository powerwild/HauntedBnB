import NewHauntForm from "./NewHauntForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";
import { Redirect } from "react-router-dom";



const NewHauntModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='new-haunt-btn' onClick={() => setRenderModal(true)}>Add New Haunt</button>
            {renderModal ? (
                <FormModal id='haunt-sizing-id' onClose={() => setRenderModal(false)}>
                    <NewHauntForm onClose={() => setRenderModal(false)} />
                </FormModal>
                ) : null
            }
        </>
    )
}

export default NewHauntModal;
