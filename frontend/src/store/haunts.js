import { csrfFetch } from "./csrf";

const ADD_NEW = 'spots/ADD_NEW';
const GET_ALL = 'spots/GET_ALL';
const UPDATE_ONE = 'spots/UPDATE_ONE';
const DELETE_ONE = 'spots/DELETE_ONE';
const DELETE_IMAGE = 'spots/DELETE_IMAGE';


const addHaunt = (spot, images) => {
    return {
        type: ADD_NEW,
        data: {spot, images}
    }
}

export const addHauntThunk = (spot, imagesArr) => async dispatch => {
    // csrfFetch('/api/spots', {
    //         method: 'POST',
    //         body: JSON.stringify(spot)
    //     }).then(async (res) => {
    //         const newSpot = await res.json();
    //         const imagesJSON = csrfFetch('/api/images', {method: 'POST',
    //             body: JSON.stringify({imagesArr, spotId: newSpot.id})
    //             })
    //         if (imagesJSON.ok) {
    //             const images = await imagesJSON.json();
    //             dispatch(addHaunt(newSpot, images));
    //             console.log(images)
    //             return images[0].spotId
    //         }
    //     })

    const newSpotJson = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(spot)
    });
    if (newSpotJson.ok) {
        const newSpot = await newSpotJson.json();
        const newImagesJSON = await csrfFetch('/api/images', {
            method: 'POST',
            body: JSON.stringify({imagesArr, spotId: newSpot.id})
        });
        if (newImagesJSON.ok) {
            const images = await newImagesJSON.json();
            dispatch(addHaunt(newSpot, images));
            console.log(newSpot)
            return newSpot.id;
        }
    }
    // console.log(createdSpot)
    // console.log(images)
    // console.log(spot.newImages)
    // await dispatch(addHaunt(spot, images));
    // return createdSpot;

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

const deleteImage = (imageId, spotId) => {
    return {
        type: DELETE_IMAGE,
        data: {imageId, spotId}
    }
}

export const deleteImageThunk = (imageId, spotId) => async dispatch => {
    const deleteMessage = await csrfFetch('/api/spots/images', {method: 'DELETE', body: JSON.stringify(imageId)})
    if (deleteMessage.ok) {
        const message = await deleteMessage.json();
        await dispatch(deleteImage(imageId, spotId));
        return message;
    }
}



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
        case DELETE_IMAGE:
            let index = newState[action.data.spotId].images.findIndex(el => el.id === action.data.imageId);
            newState[action.data.spotId].images.splice(index, 1);
            return newState;
        default:
            return state

    }
}


export default hauntReducer;
