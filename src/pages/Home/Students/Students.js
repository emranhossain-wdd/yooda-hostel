import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Students = () => {
    const { admin } = useAuth();
    const [students, setStudents] = useState([]);
    const [status, setStatus] = useState(false);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 5;

    useEffect(() => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/students?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setStudents(data.allStudents);
                const blogCount = data.count;
                setCount(Math.ceil(blogCount / size));
            })
    }, [page, status]);

    const statusUpdate = (e, id) => {
        const data = { status: e.target.value }
        fetch(`https://cryptic-sea-49152.herokuapp.com/status/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("status updated");
                    setStatus(!status)
                }
            })
    }

    const handleDeleteStudent = (id) => {
        if (window.confirm('Do you want to Delete this Student?')) {
            fetch(`https://cryptic-sea-49152.herokuapp.com/student/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingStudents = students.filter(student => student._id !== id);
                        setStudents(remainingStudents);
                        alert("Student Removed from the list.")
                    }
                })
        }
    }

    return (
        <div className='bg-gray-800 flex flex-col'>
            <h2 className='text-white text-center text-2xl font-bold mt-12'>Our Students</h2>
            <hr className='w-12 mx-auto mt-3 border-4 border-green-500' />
            <table className="table-auto text-white w-9/12 mx-auto mt-12">
                <thead>
                    <tr className='border text-left'>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Hall</th>
                        <th>Status</th>
                        {
                            admin && <th>Action</th>
                        }
                    </tr>
                </thead>

                {
                    students.map(student => <tbody key={student?._id}>
                        <tr className='border'>
                            <td>{student?.name}</td>
                            <td>{student?.roll}</td>
                            <td>{student?.age}</td>
                            <td>{student?.class}</td>
                            <td>{student?.hall}</td>
                            {
                                admin ? <td className='text-black'>
                                    <select value={student?.status} onChange={(e) => {
                                        statusUpdate(e, student?._id)
                                        // const selected = e.target.value;
                                        // console.log(selected);
                                    }}>
                                        <option value="active">Active</option>
                                        <option value="inActive">In Active</option>
                                    </select>
                                </td>
                                    :
                                    <td>{student?.status}</td>
                            }
                            {
                                admin && <td>
                                    <Link className='bg-white text-black px-1 mr-2' to={`/student/${student?._id}`}><button>edit</button></Link>
                                    <button className='bg-white text-black px-1' onClick={() => handleDeleteStudent(student?._id)}>delete</button>
                                </td>
                            }
                        </tr>
                    </tbody>)
                }

            </table>
            {/* pagination */}
            <div className='text-center py-12'>
                {
                    [...Array(count).keys()].map(pn => <button className={pn === page ? 'bg-black border-2 border-gray-400 text-white px-2 rounded m-2' : 'm-2 px-2 rounded border-2 border-gray-400 text-gray-500'} onClick={() => setPage(pn)} key={pn}>{pn + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Students;