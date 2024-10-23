import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentTask, setCurrentTask]=useState({id:null, name:'', address:'', position:'', salary:'', experience:'', phno:'', email:'', emailid:''});

    useEffect(() =>{
        axios.get('https://dummyjson.com/api/users/')
        .then(response => setTasks(response.data))
        .catch(error => console.log(error));
    },[]);


    return(
        <div className='container mt-3'>
            <h2>Employee</h2>
            <table className='table table-bordered  <td>{task.id}</td>table-hover'>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.address}</td>
                        <td>{task.position}</td>
                        <td>{task.salary}</td>
                        <td>{task.experience}</td>
                        <td>{task.phno}</td>
                        <td>{task.email}</td>
                        <td>{task.emailid}</td>
                        <td><button className='btn btn-warning px-3' onClick={() => editTask(task)}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => deleteTask(task.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            {/* {editing ? (
                <EditTaskForm
                    currentTask={currentTask}
                    updateTask={updateTask}
                />
            ) : null} */}
        </div>
    );
};


export default TaskList;