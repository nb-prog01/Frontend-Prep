export function CreateTodo(){
    return <div>
        <input type="text" placeholder="title"></input><br/>
        <input type="text" placeholder="description"></input><br/>

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST"
            })
            .then(async function(res){
              const json=await res.json;
              alert("Todo created")
            })
        }}>Add a ToDo</button>
    </div>
}
