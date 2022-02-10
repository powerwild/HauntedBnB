import NewHauntForm from "./NewHauntForm";
import { FormModal } from "../../context/Modal";
import { useState } from "react";
import { Redirect } from "react-router-dom";



const NewHauntModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);
    const [ newSpot, setNewSpot ] = useState(null);

    return (
        <>
            {newSpot ? (
                <Redirect to={`/spots/${newSpot.id}`} />
                ) : (
                    <button className='new-haunt-btn' onClick={() => setRenderModal(true)}>Add New Haunt</button>
                )
                }
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <NewHauntForm onClose={() => setRenderModal(false)} />
                </FormModal>
                ) : null
            }
        </>
    )
}

export default NewHauntModal;
