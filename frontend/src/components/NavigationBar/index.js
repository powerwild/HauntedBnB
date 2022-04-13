import { useSelector, useDispatch } from "react-redux";
import { csrfFetch } from "../../store/csrf";
import { getSession, performSearchThunk } from "../../store/session";
import ProfileButton from "./ProfileButton";
import { NavLink } from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import './Navigation.css';
import { useState } from "react";

const Navigation = ({ pageRendered }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [ searchQuery, setSearchQuery ] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    let userButtons;
    if (sessionUser) {
        userButtons = (
            <ProfileButton username={sessionUser.username} email={sessionUser.email} />
        );
    } else {
        userButtons = (
            <>
                <button className='button' onClick={(e) => demoSignIn(e)}>Demo</button>
                <LoginFormModal />
                <SignupFormModal />
            </>
        )
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const trySearch = await dispatch(performSearchThunk(searchQuery));
        if (trySearch) history.push('/search')
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
                <form className="search-bar-form" onSubmit={handleSearch}>
                    <input type='text' name='search' className='search-bar' placeholder="Search by city, state or country" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                </form>
                <div className='user-btns-div'>
                    {pageRendered && userButtons}
                </div>
            </nav>
        </>
    )
};

export default Navigation;
