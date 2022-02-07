import { useEffect, useState } from "react";
import { logoutThunk } from "../../store/session";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";



const ProfileButton = ({username, email}) => {
    const [ dropdown, setDropdown ] = useState(false);
    const [ loggingOut, setLoggingOut ] = useState(false);
    const dispatch = useDispatch();

    const openMenu = (e) => {
        e.preventDefault();
        if (dropdown) return;
        setDropdown(true);
    };
    const closeMenu = (e) => {
        e.preventDefault();
        setDropdown(false);
    };

    useEffect(() => {
        if (!dropdown) return;
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [dropdown]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutThunk());
        setLoggingOut(true);
    }

    if (loggingOut) {
        return (
            <Redirect to='/' />
        )
    }


    return(
        <>
            <button className='profile-btn' id='profile-icon-btn' onClick={e => openMenu(e)}>
                <i className="fas fa-user-secret" id='profile-icon'/>
                {dropdown && (
                    <ul className='dropdown'>
                        <li>{username}</li>
                        <li>{email}</li>
                        <li onClick={e => logout(e)}>Log Out</li>
                    </ul>
                )}
            </button>
        </>
    )
}


export default ProfileButton;
