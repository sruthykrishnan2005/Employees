import React,{useState,useEffect} from "react";
import axios from 'axios'


const TaskList=()=>{
    const [employs,setEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentEmp, setCurrentEmp]= useState({id:null,name:'',address:'',position:'',salary:'',experience:'',phno:'',email:'',empid:''});

    useEffect(()=>{
        axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
        .then(response => setEmp(response.data))
        .catch(error => console.log(error));
    },[]);
const editDetails=(dt1)=>{
    setEditing(false);
    setCurrentEmp(dt1);
    
    axios.get(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}`,updat)
}
    
    return(
        <div className="container mt-3">
            <h2>Employee Table</h2>
            <table className="table table-bordered table-hover">
                {employs.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.position}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.experience}</td>
                        <td>{emp.email}</td>
                        <td>{emp.empid}</td>
                        <td><button className="btn btn-warning px-3" onClick={() =>editDetails(emp)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() =>deleteTask(task.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            {editing ?(
                <EditTaskForm
                 currentTask={currentEmp}
                 updateTask={updateDetails}
                />
            ):null}

        </div>
    );
};
const EditTaskForm = ({ currentEmp, updateDetails}) => {
    const [employs, setEmp] = useState(currentEmp);

    const handleInputChange =(e) => {
        const { name,value } =e.target;
        setEmp({ ...employs, [name]:value});
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        updateDetails(employs.id, employs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>address</label>
                <textarea
                    name="address"
                    value={employs.address}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Update Task</button>
        </form>
    );
};


export default TaskList
    