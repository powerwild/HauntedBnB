import NewHauntForm from "./NewHauntForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";


const NewHauntModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='new-haunt-btn' onClick={() => setRenderModal(true)}>Add New Haunt</button>
            {renderModal && (
                <FormModal onClose={() => setRenderModal(false)}>
                    <NewHauntForm />
                </FormModal>
            )}
        </>
    )
}

export default NewHauntModal;
