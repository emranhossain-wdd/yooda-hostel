import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-green-500'>
            <div className="w-10/12 mx-auto">
                <div className="flex py-4">
                    <div className="text-left flex items-center space-x-4">
                        <h2 className='text-white font-mono font-bold text-2xl'>yooda</h2>
                        <p className="font-semibold text-white w-7/12">Burford Woodcraft specialises in wood. It has successfully promoted contemporary British craftsmanship for over forty years. Pieces are chosen carefully for their good design and a high quality finish. Also for originality and value for money.</p>
                    </div>
                    <div className="w-3/12 text-right text-white">
                        <h3 className="text-2xl font-bold mb-4">Useful links</h3>
                        <div className="grid font-semibold">
                            <Link to="/">Home</Link>
                            <Link to="/newblog">New blog</Link>
                            <Link to="/dashboard/myblogs">My blogs</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-gray-500 font-semibold text-white text-center py-2">
                    &copy; {new Date().getFullYear()} yooda . All rights reserve
                </div>
            </div>
        </div>
    );
};

export default Footer;