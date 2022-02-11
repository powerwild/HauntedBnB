import { csrfFetch } from "./csrf";

const POST_REV = 'reviews/POST';
const GET_REVS = 'reviews/GET_REVS';
const PUT_REV = 'reviews/PUT';
const DELETE_REV = 'reviews/DELETE';



const postRev = (rev) => {
    return {
        type: POST_REV,
        rev
    }
}

export const postRevThunk = (review) => async dispatch => {
    const newReviewJSON = await csrfFetch('/api/reviews', {method: 'POST', body: JSON.stringify(review)});
    if (newReviewJSON.ok) {
        const newReview = await newReviewJSON.json();
        dispatch(postRev(newReview))
    }
    return newReviewJSON;
}




const getRevs = (revs) => {
    return {
        type: GET_REVS,
        revs
    }
}

export const getRevsThunk = (spotId) => async dispatch => {
    const revsJSON = await csrfFetch(`/api/reviews/${spotId}`);
    if (revsJSON.ok) {
        const reviews = await revsJSON.json();
        dispatch(getRevs(reviews));
    }
    return revsJSON;
}




const putRev = (rev) => {
    return {
        type: PUT_REV,
        rev
    }
}

export const putRevThunk = (newReview) => async dispatch => {
    const updatedReviewJSON = await csrfFetch('/api/reviews', {method: 'PUT', body: JSON.stringify(newReview)})
    if (updatedReviewJSON.ok) {
        const updatedReview = updatedReviewJSON.json();
        dispatch(putRev(updatedReview))
    }
    return updatedReviewJSON;
}




const deleteRev = (id) => {
    return {
        type: DELETE_REV,
        id
    }
}

export const deleteRevThunk = (id) => async dispatch => {
    const deleteRevJSON = await csrfFetch('/api/reviews', {method: 'POST', body: JSON.stringify(id)})
    if (deleteRevJSON.ok) {
        dispatch(deleteRev(id));
    }
    return deleteRevJSON;
}






const reviewReducer = (state={}, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_REVS:
            action.revs.forEach(rev => {
                newState[rev.id] = rev;
            })
            return newState;
        case POST_REV:
            newState[action.rev.id] = action.rev;
            return newState;
        case PUT_REV:
            newState[action.rev.id] = action.rev;
            return newState;
        case DELETE_REV:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }

}


export default reviewReducer;
