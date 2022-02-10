import { csrfFetch } from "./csrf";

const ADD_NEW = 'spots/ADD_NEW';
const GET_ALL = 'spots/GET_ALL';
const UPDATE_ONE = 'spots/UPDATE_ONE';
const DELETE_ONE = 'spots/DELETE_ONE';


const addHaunt = (spot) => {
    console.log(spot)
    const images = [...spot.Images];
    delete spot.Images;
    return {
        type: ADD_NEW,
        data: {spot, images}
    }
}

export const addHauntThunk = (spot) => async dispatch => {
    const newSpotJSON = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot)
    })
    if (newSpotJSON.ok) {
        const spot = await newSpotJSON.json();
        console.log(spot)
        await dispatch(addHaunt(spot));
        return spot;
    }
}

const getAllHaunts = (spots) => {
    return {
        type: GET_ALL,
        spots
    }
}
export const getAllHauntsThunk = () => async dispatch => {
    const spotsJSON = await csrfFetch('/api/spots', {
        method: 'GET'
    });
    if (spotsJSON.ok) {
        const spots = await spotsJSON.json();
        await dispatch(getAllHaunts(spots));
    }
    return spotsJSON;
}


const updateHaunt = (spot) => {
    return {
        type: UPDATE_ONE,
        spot
    }
}

export const updateHauntThunk = (spot) => async dispatch => {
    const updatedSpotJSON = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        body: JSON.stringify(spot)
    });
    if (updatedSpotJSON.ok) {
        const updatedSpot = await updatedSpotJSON.json();
        await dispatch(updateHaunt(updatedSpot));
    }
    return updatedSpotJSON;
}


const deleteHaunt = (id) => {
    return {
        type: DELETE_ONE,
        id
    }
};

export const deleteHauntThunk = (removeAtId) => async dispatch => {
    const deletedSpot = await csrfFetch(`/api/spots/${removeAtId}`, {method: 'DELETE'});
    if (deletedSpot.ok) {
        const message = await deletedSpot.json();

        await dispatch(deleteHaunt(removeAtId));
    }
    return deletedSpot;
};



const initialState = {};

const hauntReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_NEW:
            newState[action.data.spot.id] = {spot: action.data.spot, images: action.data.images};
            return newState;
        case GET_ALL:
            action.spots.forEach(spot => {
                let imageArr = [...spot.Images];
                delete spot.Images;
                newState[spot.id] = {spot, images: imageArr};
            });
            return newState;
        case UPDATE_ONE:
            newState[action.spot.id].spot = action.spot;
            return newState;
        case DELETE_ONE:
            delete newState[action.id];
            return newState;
        default:
            return state

    }
}


export default hauntReducer;
