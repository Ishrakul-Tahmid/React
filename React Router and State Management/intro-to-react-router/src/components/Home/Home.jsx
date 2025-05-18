import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div>
            <Header></Header>
            {navigation.state === 'loading' ? <h2>Loading...</h2> : <Outlet></Outlet>
            }
            <h2>This is the home component</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;