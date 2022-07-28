import {SIGNUP_LOADING ,SIGNUP_SUCCESS ,SIGNUP_ERROR ,LOGIN_LOADING ,LOGIN_ERROR ,LOGIN_SUCCESS } from './actionTypes';

const initialState = {
    loading : false,
    error : false,
    token : null,
    message : ""
}

export const reducer = (state = initialState , {type , payload}) =>{
    switch(type){
        case SIGNUP_LOADING:
            return {
                ...state,
                loading : true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                loading : false,
                error : true,
            }
        case LOGIN_LOADING:
            return {
                ...state,
                loading : true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading : false,
                error : true,
            }
        default :
            return state;
    }
}