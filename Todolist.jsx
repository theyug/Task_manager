import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom' 
import { retrieveAllTodosforusernameApi , deleteTodoApi } from "./api/TodoApiService";
import { Authcontext, useAuth } from './Security/AuthContext';

export default function ListTodocomponent() {
    const today = new Date();
   const Authcontext = useAuth()  
   const navigate = useNavigate();
   const username = Authcontext.username
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());
    const [todos, setTodos] = useState([]);
    const [message, setmessage] = useState(null);

    useEffect(() => {
        refreshtodos();
    }, []);

    function refreshtodos() {
        retrieveAllTodosforusernameApi('yug')
            .then(response => {
               
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }
    function deleteTodo(id){
        console.log('clicked'  + id)
        deleteTodoApi(username , id )
        .then(  
            () => {
                setmessage(`delete of todos with ${id} succefull`)

                refreshtodos()
            }
             
        )
        .catch(error => console.log(error));
    }
    function updateTodo(id) {
        console.log('clicked ' + id)
        navigate(`/todo/${id}`)
    }
    function Addtodo(id) {
        console.log('clicked ' + id)
        navigate(`/todo`)
    }

    return (
        <div className="container">
            <h1>Things to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            
                        <th>id</th>
                        <th>Username</th>
                            <th>Description</th>
                            
                            <th>Target Date</th>
                            <th>Is Done?</th>
                            <th>Delete</th>
                            <th>update</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td> <button className="btn btn-warning" 
                                                    onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
                                    <td> <button className="btn btn-success" 
                                                    onClick={() => updateTodo(todo.id)}>Update</button> </td>
                                </tr>
                            )
                        )
                    }                    </tbody>
                </table>
                {/* Todo details */}
            </div>
            <div>
            <button className="btn-btn-success"
                            onClick={()=>Addtodo}>Add_Todo</button>
            </div>
            <div>
                <Link to="/logout">Log Out</Link>
            </div>
        </div>
    );
}
