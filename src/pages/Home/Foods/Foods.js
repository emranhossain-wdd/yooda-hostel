import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Foods = () => {
    const { admin } = useAuth();
    const [foods, setFoods] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 5;

    useEffect(() => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/foods?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.allFoods);
                const blogCount = data.count;
                setCount(Math.ceil(blogCount / size));
            })
    }, [page]);

    const handleDeleteFood = (id) => {
        if (window.confirm('Do you want to Delete this Food Item?')) {
            fetch(`https://cryptic-sea-49152.herokuapp.com/food/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingFoods = foods.filter(student => student._id !== id);
                        setFoods(remainingFoods);
                        alert("Food Removed from the list.")
                    }
                })
        }
    }

    return (
        <div className='bg-gray-700 flex flex-col'>
            <h2 className='text-white text-center text-2xl font-bold mt-12'>Our Food Items</h2>
            <hr className='w-12 mx-auto mt-3 border-4 border-green-500' />
            <table className="table-auto text-white w-9/12 mx-auto mt-12">
                <thead>
                    <tr className='border text-left'>
                        <th>Name</th>
                        <th>Price</th>
                        {
                            admin && <th>Action</th>
                        }
                    </tr>
                </thead>

                {
                    foods.map(food => <tbody key={food?._id}>
                        <tr className='border'>
                            <td>{food?.name}</td>
                            <td>{food?.price}<span className='text-2xl'>৳</span></td>
                            {
                                admin && <td>
                                    <Link className='bg-white text-black px-1 mr-2' to={`/food/${food?._id}`}><button>edit</button></Link>
                                    <button className='bg-white text-black px-1' onClick={() => handleDeleteFood(food?._id)}>delete</button>
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

export default Foods;