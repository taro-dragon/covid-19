import {
    FETCH_COVID,
    FETCH_COVID_SUCCESS,
    FETCH_COVID_FAIL
} from '../actions/types'

const init = {
    loading: true,
    error: null,
    data: null
}

export default function ( state = init, action ) {
    switch(action.type){
        case FETCH_COVID:
            return {
                ...state,
                loading: true
            }
        case FETCH_COVID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {...action.payload}
            }
        case FETCH_COVID_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return {...state}
    }
}