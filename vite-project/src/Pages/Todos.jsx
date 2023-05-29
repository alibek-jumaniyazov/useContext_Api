import { useContext, useEffect, useRef, useState } from "react"
import TodoAdd from "../Components/TodoADD"
import axios from "axios"
import Todo from "../Components/Todo"
import Chekbox from "../Components/Chekbox"
import { UserContext } from "../Contex/UserContext"


export default function Todos() {

    const [state, setState] = useState([])
    const url = "http://faveo.uz:8080/api/v1/todos"
    const user = JSON.parse(localStorage.getItem('user'))

    const [todos ,setTodos] = useState(false)


    const todoRef = useRef()


    const { userr, setUser , dark } = useContext(UserContext);

    

    // setState(userr)

    console.log(userr);

    const requestTodo = async () => {
        const body = {
            title: todoRef.current.value
        }

        try {

            const postTodo = await axios.post(url, body, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })

            setUser([...userr, postTodo.data])
        }
        catch (err) {
            console.log(err);
        }

    }


    const requestDelete = async (id) => {
        try {
            const deleteTodo = await axios.delete(url + `/${id}`, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })

            setUser(userr.filter((value) => value.id !== id))
        }
        catch (err) {
            console.log(err);
        }
    }



    function addTogle(){
        if(todos == false){
            setTodos(true)
        }
    
    }

    return (
        <div className={
            todos ?
            dark
            :
            ''
        }>
            <h1>Salom {user.name}</h1>
            <TodoAdd todoRef={todoRef} requestTodo={requestTodo} />
           <Chekbox/>

            {
                userr.map((item) => (
                    <Todo key={item.id} item={item} requestDelete={requestDelete} />
                ))
            }

        </div>
    )
}