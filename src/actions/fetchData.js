import axios from 'axios'

import { 
    FETCH_COVID,
    FETCH_COVID_SUCCESS,
    FETCH_COVID_FAIL
} from './types' 

export const fetchData = () => async (dispatch) => {
    dispatch({type: FETCH_COVID})
    try {
        const res = await axios.get('https://api.covid19api.com/summary')
        dispatch({type: FETCH_COVID_SUCCESS, payload: res.data})
    } catch (error) {
        console.warn(error.response)
        dispatch({type: FETCH_COVID_FAIL})
    }
}