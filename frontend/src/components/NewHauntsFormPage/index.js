import NewHauntForm from "./NewHauntForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";



const NewHauntModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);
    const [ newSpot, setNewSpot ] = useState(null);

    return (
        <>
            <button className='new-haunt-btn' onClick={() => setRenderModal(true)}>Add New Haunt</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <NewHauntForm setNewSpot={setNewSpot} />
                </FormModal>
                ) : null
            }
        </>
    )
}

export default NewHauntModal;
