export const signupLoading = () =>{
    return {
        type : SIGNUP_LOADING
    };
}

export const signupSuccess = () =>{
    return{
        type : SIGNUP_SUCCESS
    };
}

export const signupError = () =>{
    return{
        type : SIGNUP_ERROR,
    };
}

export const loginError = () =>{
    return{
        type : LOGIN_ERROR,
    };
}
export const loginLoading = () =>{
    return{
        type : LOGIN_LOADING,
    };   
}
export const loginSuccess = (payload) =>{
    return{
        type : LOGIN_SUCCESS,
        payload
    };
}