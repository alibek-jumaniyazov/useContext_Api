export default function TodoAdd({todoRef ,requestTodo}){
    return(
        <div className="">
            <input ref={todoRef} type="text"  />
            <button onClick={() => requestTodo()}>add</button>
        </div>
    )
}