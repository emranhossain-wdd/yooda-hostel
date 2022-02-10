import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { XIcon } from '@heroicons/react/outline';
import useAuth from '../../../Hooks/useAuth';

const AddStudent = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [studentAdded, setStudentAdded] = useState(false);

    const onSubmit = data => {
        data.email = user?.email;
        fetch('https://cryptic-sea-49152.herokuapp.com/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setStudentAdded(true);
                    reset();
                }
            })
    };

    return (
        <div className="w-9/12 mx-auto">
            <h2 className="text-2xl bg-green-50 text-center text-green-600 rounded-lg mb-4 p-2">Add a student</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="ring-2 ring-green-600 rounded-sm p-2"
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Full name"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.name && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-green-600 rounded-sm p-2"
                    type="number"
                    {...register("roll", { required: true })}
                    placeholder="Roll"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.roll && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-green-600 rounded-sm p-2"
                    type="number"
                    {...register("age", { required: true })}
                    placeholder="Age"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.age && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-green-600 rounded-sm p-2"
                    type="number"
                    {...register("class", { required: true })}
                    placeholder="Class"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.class && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-green-600 rounded-sm p-2"
                    type="text"
                    {...register("hall", { required: true })}
                    placeholder="Hall"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.hall && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                <select className='ring-2 ring-green-600 rounded-sm p-2' {...register("status", { required: true })}>
                    <option value="not defined">status</option>
                    <option value="active">Active</option>
                    <option value="inActive">In Active</option>
                </select>
                {
                    errors.status && <span className="bg-green-50 text-green-500 rounded-md">This field is required</span>
                }
                {studentAdded && <span className="bg-green-50 text-green-500 rounded-md flex justify-between tracking-wider p-1">Student added<XIcon onClick={() => setStudentAdded(false)} className="h-6 w-6" aria-hidden="true" /></span>}

                <input className="bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 text-white rounded-sm p-2" type="submit" value="Add Student" />
            </form>
        </div>
    );
};

export default AddStudent;