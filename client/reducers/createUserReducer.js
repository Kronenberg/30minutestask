import * as TYPES from '../TYPES';

const initialState = {
    pending: false,
    success: false,
    rejected: false,
    userData: null,
    error: null
}

function createUserReducer(state = initialState, action) {
    switch(action.type) {
        case TYPES.CREATE_USER_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case TYPES.CREATE_USER_SUCCESS: {
            return {
                ...state,
                pending: false,
                success: true,
                rejected: false,
                userData: action.payload
            }
        }
        case TYPES.GET_CURRENT_USER: {
            pending: false,
            success: true,
            rejected: false,
            userData: action.payload
        }
        case TYPES.CREATE_USER_REJECTED: {
            return {
                ...state,
                pending: false,
                success: false,
                rejected: true,
                error: action.payload
            }
        }
        case TYPES.CREATE_USER_TO_INITIAL: {
            return {
                ...state,
                pending: false,
                success: false,
                rejected: false,
                userData: null,
                error: null
            }
        }

        default: {
            return state;
        }
       
    }
}

export default createUserReducer;