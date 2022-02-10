import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Student = () => {
    const [student, setStudent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/student/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [id])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.name = updatedName;
        setStudent(updatedStudent);
    }
    const handleRollChange = e => {
        const updatedRoll = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.roll = updatedRoll;
        setStudent(updatedStudent);
    }
    const handleAgeChange = e => {
        const updatedAge = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.age = updatedAge;
        setStudent(updatedStudent);
    }
    const handleClassChange = e => {
        const updatedClass = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.class = updatedClass;
        setStudent(updatedStudent);
    }
    const handleHallChange = e => {
        const updatedHall = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.hall = updatedHall;
        setStudent(updatedStudent);
    }

    const handleOnSubmit = (e) => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/student/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Student Updated")
                }
            })
        e.preventDefault()
    };

    return (
        <div>
            <Header />
            <div className="w-9/12 mx-auto my-12">
                <h2 className="text-2xl bg-green-50 text-center text-green-600 rounded-lg mb-4 p-2">Update a student</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleOnSubmit}>
                    <input
                        value={student?.name || ''}
                        onChange={handleNameChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="text"
                    />
                    <input
                        value={student?.roll || ''}
                        onChange={handleRollChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="number"
                    />
                    <input
                        value={student?.age || ''}
                        onChange={handleAgeChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="number"
                    />
                    <input
                        value={student?.class || ''}
                        onChange={handleClassChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="number"
                    />
                    <input
                        value={student?.hall || ''}
                        onChange={handleHallChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="text"
                    />

                    <input className="bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 text-white rounded-sm p-2" type="submit" value="Update Student" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Student;