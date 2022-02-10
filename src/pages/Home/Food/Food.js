import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Food = () => {
    const [food, setFood] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedFood = { ...food };
        updatedFood.name = updatedName;
        setFood(updatedFood);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedFood = { ...food };
        updatedFood.price = updatedPrice;
        setFood(updatedFood);
    }

    const handleOnSubmit = (e) => {
        fetch(`https://cryptic-sea-49152.herokuapp.com/food/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Food Item Updated")
                }
            })
        e.preventDefault()
    };

    return (
        <div>
            <Header />
            <div className="w-9/12 mx-auto my-12">
                <h2 className="text-2xl bg-green-50 text-center text-green-600 rounded-lg mb-4 p-2">Update a Food Item</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleOnSubmit}>
                    <input
                        value={food?.name || ''}
                        onChange={handleNameChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="text"
                    />
                    <input
                        value={food?.price || ''}
                        onChange={handlePriceChange}
                        className="ring-2 ring-green-600 rounded-sm p-2"
                        type="number"
                    />

                    <input className="bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 text-white rounded-sm p-2" type="submit" value="Update Food" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Food;