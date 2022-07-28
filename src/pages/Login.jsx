import React from "react";
import axios from "axios";

const initialState ={
    username: "",
    password: "",
}
const Login = () => {
    const [loginData,setLoginData] = React.useState(initialState);

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setLoginData(prev =>(
            {...prev,[name] : value}
        ));
    }

    const handleLogin = (e) =>{
        Object.values(loginData).forEach(el => {
            let isValid = true;
            if(!el){
                isValid = false;
            }
            if(!isValid){
                return alert("Please fill all the fields");
            }
        })
        axios({
            method: "POST",
            url: "https://masai-api-mocker.herokuapp.com/auth/login",
            data : loginData
        }).then(res => {
            
        }).catch(res =>{

        })
    }
    return(
        <div>
            {
            Object.keys(loginData).map(elem =>(
                <div>
                    <input key = {elem} onChange = {handleChange} value = {loginData[elem]} type = "text" placeholder= {elem} />
                </div>
            ))
            }
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;