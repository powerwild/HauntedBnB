import SignupForm from "./SignupForm";
import { FormModal } from '../../context/Modal';
import { useState } from "react";


const SignupFormModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='login-btn button' onClick={() => setRenderModal(true)}>Sign Up</button>
            {renderModal ? (
                <FormModal id='signup-sizing-id' onClose={() => setRenderModal(false)}>
                    <SignupForm />
                </FormModal>
                ) : null
            }
        </>

    )
};


export default SignupFormModal;
