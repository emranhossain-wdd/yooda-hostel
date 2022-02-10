import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Foods from '../Foods/Foods';
import Students from '../Students/Students';

const Home = () => {
    return (
        <div>
            <Header />
            <Students />
            <Foods />
            <Footer />
        </div>
    );
};

export default Home;