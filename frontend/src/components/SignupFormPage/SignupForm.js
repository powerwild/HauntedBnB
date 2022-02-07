import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signupThunk } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';



const SignupForm = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);

    const dispatch = useDispatch();
    const newSession = useSelector(state => state.session.user);

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        let errors = [];
        if (username.length < 4 || username.length > 30) errors.push('Username must be more than 4 but less than 30.');
        if (email.length < 1) errors.push('Please provide an email.');
        if (password.length < 6) errors.push('Password must be at least 6 characters long.');
        if (password !== confirmPassword) errors.push('Password and Confirm password fields do NOT match.');
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }

        return dispatch(signupThunk(username, email, password))
            .catch( async (res) => {
                const data = await res.json();
                if (data?.errors) setValidationErrors(data.errors);
        })

    };


    return (
            <form className='signup-form' onSubmit={handleSubmit}>
                <ul>
                    {validationErrors.length > 0 && validationErrors.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                </ul>
                <label htmlFor='email' className='user-form-label'>
                    Email
                    <input name='email'
                        type='text'
                        placeholder='email@org.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    </label>
                <label htmlFor='username' className='user-form-label'>
                    Username
                    <input name='username'
                        type='text'
                        placeholder='myusername'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    </label>
                <label htmlFor='password' className='user-form-label'>
                    Password
                    <input name='password'
                        type='password'
                        placeholder='a-z A-Z 0-9 ! @ # $'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    </label>
                <label htmlFor='confirmPassword' className='user-form-label'>
                    Confirm Password
                    <input name='confirmPassword'
                        type='password'
                        placeholder='a-z A-Z 0-9 ! @ # $'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    </label>
                <button disabled={validationErrors.length > 0}>Sign Up</button>
            </form>

    )
}

export default SignupForm;
