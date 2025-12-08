import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;