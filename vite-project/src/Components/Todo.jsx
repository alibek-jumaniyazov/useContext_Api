export default function Todo({item, requestDelete}){
    return(
        <div className="">
            <p>{item.title}</p>
            <button onClick={() => requestDelete(item.id)}>Delet</button>
        </div>
    )
}