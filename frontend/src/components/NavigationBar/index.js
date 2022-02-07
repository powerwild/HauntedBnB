import { useSelector, useDispatch } from "react-redux";
import { csrfFetch } from "../../store/csrf";
import { getSession } from "../../store/session";
import ProfileButton from "./ProfileButton";
import { NavLink } from 'react-router-dom';
import LoginFormModal from "../LoginFormPage";
import SignupFormModal from '../SignupFormPage';


import './Navigation.css';

const Navigation = ({ pageRendered }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let userButtons;
    if (sessionUser) {
        userButtons = (
            <ProfileButton username={sessionUser.username} email={sessionUser.email} />
        );
    } else {
        userButtons = (
            <>
                <button onClick={(e) => demoSignIn(e)}>Demo</button>
                <LoginFormModal />
                <SignupFormModal />
            </>
        )
    }


    const demoSignIn = async (e) => {
        e.preventDefault();
        const userJSON = await csrfFetch('/api/users/demo');
        if (userJSON.ok) {
            const data = await userJSON.json();
            dispatch(getSession(data.user));
            return data.user;
        }
    }


    return (
        <>
            <nav className='nav-bar'>
                <div className='app-nav'>
                    <div className='nav-icon'><i className="fas fa-ghost" /></div>
                    <NavLink className='home-nav' to='/'>HauntedBnB</NavLink>
                </div>
                <input type='text' className='search-bar'></input>
                {pageRendered && userButtons}
            </nav>
        </>
    )
};

export default Navigation;
