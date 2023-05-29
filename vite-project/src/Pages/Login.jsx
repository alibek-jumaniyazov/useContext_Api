import { useRef } from "react";
import Input from "../Components/Input";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";


export default function Login() {

    const nameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()



    const navigate = useNavigate()


    const requestLogin = async () => {
        const url = "http://faveo.uz:8080/api/v1/account"
        const body = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const postLogin = await axios.post(url, body)
            localStorage.setItem('user', JSON.stringify(postLogin.data))

            navigate('/todos')
        }
        catch (err) {
            console.log(err);
        }


    }

    return (
        <div className="">
            <Input type="text" placeholder="Name" ref={nameRef} />
            <Input type="text" placeholder="Username" ref={usernameRef} />
            <Input type="pasword" placeholder="Password" ref={passwordRef} />
            <button onClick={() => requestLogin()}>Login</button>
        </div>
    )
}