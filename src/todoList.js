import { useState } from "react"

export default function TodoList() {


    const [todos, setTodos] = useState([{ task: "my first task", completed: false },
    { task: "my second task", completed: true }])


    function handleSubmit(event) {
        event.preventDefault()


        let task = event.target.task.value

        if (!task) {
            alert("Please provide a valid task")
            return
        }

        setTodos([...todos, { task: task, completed: false }])

        event.target.reset()
    }


    function changeTaskStatus(index) {
        let newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }



    function deleteTask(index) {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="container my-5">
            <div className="mx-auto rounded border p-4" style={{ width: "600px" , backgroundColor: "#08618d"}}>
                <h2 className="text-white text-center mb-5">My To do List</h2>
                
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="New Task" name="task" />
                    <button className="btn btn-outline-light" type="submit">Add</button>
                </form>


                {
                    todos.map((todo, index) => {
                        return (
                            <div key={index} className="rounded mt-4 p-2 d-flex" 
                                style={{ backgroundColor: todo.completed ? "#87fc68" : "lightGray" }}>

                                <div className="me-auto">
                                    {todo.task}
                                </div>
                                <div >
                                    <i className={"h5 me-2 " + (todo.completed ? "bi bi-check-square" : "bi bi-square")}
                                        style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)}></i>
                                    <i className="bi bi-trash text-danger h5"
                                        style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}></i>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}