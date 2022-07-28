import axios from "axios";
import React from "react";

const initialState ={
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
}
const Signup = () => {
    const [signupData, setSignupData] = React.useState(initialState);

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setSignupData(prev =>(
            { ...prev, [name] : value}
        ));
    }

    const handleSignup = () =>{
        let isValid = true;
        Object.values(signupData).forEach(el => {
            if(!el){
                isValid = false;
            }
            if(!isValid){
                alert("Please fill all the fields");
                return;
            }
        })
        axios({
            method: "post",
            url: "https://masai-api-mocker.herokuapp.com/auth/register",
            data : signupData
        }).then(res => {
            
        }).catch(res =>{

        })
    }
    return(
        <div>
            {Object.keys(signupData).map(elem =>(
                <div>
                    <input placeholder= {elem} name = {elem} key ={elem} value = {signupData[elem]} type = "text" onChange = {handleChange} />
                </div>
            ))}
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}

export default Signup;

/*
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}
*/