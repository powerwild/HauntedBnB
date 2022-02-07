import { csrfFetch } from "./csrf";

const GET = 'session/GET';
const REMOVE = 'session/REMOVE';

export const getSession = (user) => {
    return {
        type: GET,
        user
    }
};

export const getSessionThunk = (credential, password) => async (dispatch) => {
    const loginJSON = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({credential, password})
    })
    if (loginJSON.ok) {
        const data = await loginJSON.json();
        dispatch(getSession(data.user));
        return data.user;
    }
};

export const restoreUserSessionThunk = () => async (dispatch) => {
    const sessionJSON = await csrfFetch('/api/session');

    if (sessionJSON.ok) {
        const data = await sessionJSON.json();
        dispatch(getSession(data.user || null));
        return data.user;
    }
};

export const signupThunk = (username, email, password) => async (dispatch) => {
    const userJSON = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, email, password})
    });
    if (userJSON.ok) {
        const data = await userJSON.json();
        console.log(data)
        dispatch(getSession(data.user));
        return data.user;
    }
}



 const removeSession = () => {
    return {
        type: REMOVE
    }
};

export const logoutThunk = () => async (dispatch) => {
    const logoutJSON = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (logoutJSON.ok) {
        const logoutMessage = await logoutJSON.json();
        dispatch(removeSession());
        return logoutMessage.message;
    }
}


const initialState = {user: null};

const sessionReducer = ( state = initialState, action ) => {
    let newState = {...state};
    switch (action.type) {
        case GET:
            newState.user = action.user;
            return newState;
        case REMOVE:
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
