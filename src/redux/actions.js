import axios from "axios";
import { GET_DOGS, GET_DOGS_BY_NAME, GET_DOG, POST_DOG, GET_TEMPERAMENTS, ERROR } from "./types";

export const getDogs = ()=>{
    const endpoint = 'http://localhost:3001/dogs'
    return async(dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_DOGS,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
};

export const getDogsByName = (name)=>{
    const endpoint = `http://localhost:3001/dogs/?name=${name}`
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: GET_DOGS_BY_NAME,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getDog = (id)=>{
    const endpoint = `http://localhost:3001/dogs/${id}`
    return async(dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_DOG,
                payload: data
            }) 
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const postDog = (dogData)=>{
    const endpoint = "http://localhost:3001/dogs/";
    return async(dispatch)=>{
        try {
            const {data} = await axios.post(endpoint, dogData);
            return dispatch({
                type: POST_DOG,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getTemperaments = ()=>{
    const endpoint = 'http://localhost:3001/temperaments'
    return async (dispatch) =>{
        try {
            const { data } = await axios.get(endpoint);
            data.sort((a,b)=>a.localeCompare(b))
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            }) 
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}