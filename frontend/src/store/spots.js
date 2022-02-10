import { csrfFetch } from "./csrf";

const ADD_NEW = 'spots/ADD_NEW';
const GET_ALL = 'spots/GET_ALL';
const UPDATE_ONE = 'spots/UPDATE_ONE';
const DELETE_ONE = 'spots/DELETE_ONE';


const addSpot = (spot, images) => {
    return {
        type: ADD_NEW,
        data: {spot, images}
    }
}

export const addSpotThunk = (spot) => async dispatch => {
    const newSpotJSON = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot)
    })
    if (newSpotJSON.ok) {
        const spot = await newSpotJSON.json();
        dispatch(addSpot(spot.newSpot, spot.spotImages));
        return spot.newSpot;
    }
}

const getAllSpots = (spots) => {
    return {
        type: GET_ALL,
        spots
    }
}
export const getAllSpotsThunk = () => async dispatch => {
    const allSpotsJSON = await csrfFetch('/api/spots', {
        method: 'GET'
    });
    if (allSpotsJSON.ok) {
        const allSpots = await allSpotsJSON.json();
        dispatch(getAllSpots(allSpots.spots));
        return allSpots;
    }
}


const updateSpot = (newSpot) => {
    return {
        type: UPDATE_ONE,
        newSpot
    }
}

export const updateSpotThunk = (spot) => async dispatch => {
    const updatedSpotJSON = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        body: JSON.stringify(spot)
    });
    if (updatedSpotJSON.ok) {
        const updatedSpot = await updatedSpotJSON.json();
        dispatch(updateSpot(updatedSpot));
        return updatedSpot;
    }
}


const deleteSpot = (id) => {
    return {
        type: DELETE_ONE,
        id
    }
};

export const deleteSpotThunk = (removeAtId) => async dispatch => {
    const deletedSpot = await csrfFetch(`/api/spots/${removeAtId}`, {method: 'DELETE'});
    if (deletedSpot.ok) {
        const message = deletedSpot.json();
        alert(message.msg);
        dispatch(deleteSpot(removeAtId));
        return;
    }
};



const initialState = {};

const spotReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_NEW:
            newState[action.data.spot.id] = {spot: action.data.spot, images: action.data.images};
            return newState;
        case GET_ALL:
            action.spots.forEach(spot => {
                let imageArr = [...spot.Images];
                delete spot.Images;
                spot.imageIndex = [];
                let imageObj = {};
                imageArr.forEach(image => {
                    imageObj[image.id] = image
                    spot.imageIndex.push(image.id);
                });
                newState[spot.id] = {spot, images: imageObj};
            });
            return newState;
        case UPDATE_ONE:
            newState[action.newSpot.id].spot = action.spot;
            return newState;
        case DELETE_ONE:
            delete newState[action.id];
            return newState;
        default:
            return state

    }
}


export default spotReducer;
