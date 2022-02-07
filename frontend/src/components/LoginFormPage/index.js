import LoginForm from "./LoginForm";
import { FormModal } from '../../context/Modal';
import { useState } from "react";

const LoginFormModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='login-btn' onClick={() => setRenderModal(true)}>Log In</button>
            {renderModal && (
                <FormModal onClose={() => setRenderModal(false)}>
                    <LoginForm />
                </FormModal>
            )}
        </>

    )
};


export default LoginFormModal;
