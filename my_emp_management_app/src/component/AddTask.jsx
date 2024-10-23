import React, {useState} from 'react';
import axios from 'axios';

const AddTask = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://dummyjson.com/users/',{ name, address })
            .then(response=>{
                console.log(response.data);
                setName('');
                setAddress('');
            })
            .catch(error => console.log(error));
    }

    return(
        <div className='container'>
        <form onSubmit={handleSubmit}>
            <h2 className='text-info'><u>Add Task</u></h2>

            <div>
                <label className='text-dark'>Name</label>
                <input
                    className='form-control'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label>Address</label>
                <textarea
                    className='form-control'

                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button type="submit" className='btn btn-success mt-3'>Add Emp</button>
        </form>
        </div>
    );
};

export default AddTask;



