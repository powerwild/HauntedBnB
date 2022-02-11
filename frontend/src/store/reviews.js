import { csrfFetch } from "./csrf";

const POST_REV = 'reviews/POST';
const GET_REVS = 'reviews/HAUNT_REVS';
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
}




const getRevs = (revs) => {
    return {
        type: GET_HAUNTS,
        revs
    }
}

export const getRevsThunk = () => async dispatch => {
    const something = await csrfFetch('', {})
}




const putRev = (rev) => {
    return {
        type: PUT_REV,
        rev
    }
}

export const putRevThunk = () => async dispatch => {
    const something = await csrfFetch('', {})
}




const deleteRev = (id) => {
    return {
        type: DELETE_REV,
        id
    }
}

export const deleteRevThunk = () => async dispatch => {
    const something = await csrfFetch('', {})
}






const reviewReducer = (state={}, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_REVS:
            action.revs.forEach(rev => {
                newState[rev.id] = action.rev;
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
