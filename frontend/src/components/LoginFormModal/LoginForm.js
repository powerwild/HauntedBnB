import { useEffect, useState } from 'react';
import { getSessionThunk } from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {
    const [ credential, setCredential ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);



    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationErrors([]);
        return dispatch(getSessionThunk(credential, password))
        .catch( async (res) => {
            const data = await res.json();
            if (data?.errors) setValidationErrors(data.errors);
        })
    }

    useEffect(() => {
        let errors = []
        if (credential.length < 3) errors.push('Must provide a valid email or username.');
        if (password.length < 6) errors.push('Must provide a valid password.');
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        return setValidationErrors([]);
    }, [credential, password])

    return (

            <form className='login-form' onSubmit={handleSubmit}>
                <ul>
                    {validationErrors?.map((err, i) => (
                        <li key={i} className='validation-error-message'>{err}</li>
                    ))}
                </ul>
                <label htmlFor='credential' className='user-form-label'>
                    Username or Email
                    <input name='credential'
                        type='text'
                        placeholder='username or email'
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor='password' className='user-form-label'>
                    Password
                    <input name='password'
                        type='password'
                        placeholder='a-z A-Z 0-9 ! @ # $'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button className='login-form-btn' disabled={validationErrors.length > 0}>Log In</button>
            </form>

    )
}

export default LoginForm;
