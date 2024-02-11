/**
 * todos=[
 *  {
 *      title:"",
 *      description:""
 *  }
 * ]
 * 
 */

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

//// using props
// export function Todos(props){
//     const todos=props.todos;
//     return <div>
//         <h1>todos.title/h1>
//         <h2>todos.description</h2>
//         <button>{todos.completed==true? "Completed":"Mark as completed"}</button>
//     </div>
// }
