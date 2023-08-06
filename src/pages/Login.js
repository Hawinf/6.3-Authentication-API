import axios from "axios";
import React, { useState } from "react";
import { API } from "../const/endpoint";

const Login = () => {
    const [em, setEm] = useState('');
    const [pass, setPass] = useState('');

    const handleEm = (e) => {
        // console.log(e.target.value)
        setEm(e.target.value)
    }

    const handlePass = (e) => {
        // console.log(e.target.value)
        setPass(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            email: em,
            password: pass,
          };

        axios
          .post(API.LOGIN, payload)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => console.log(err.message))
    };

    return (
        <div>
            <h1>Login Admin Page</h1>
            <p>Enter Your E-mail</p>
            <input onChange={handleEm} placeholder="eg@gmail.com" />
            <p>Input your password</p>
            <input onChange={handlePass} placeholder="min 6 character" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;