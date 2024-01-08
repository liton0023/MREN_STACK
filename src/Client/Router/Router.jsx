import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../About';
import Home from '../Home';
import SingIn from '../SingIn';
import SingUp from '../SingUp';

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'singin',
                element:<SingIn></SingIn>
            },
            {
                path:'Singup',
                element:<SingUp></SingUp>
            },

        ]
    }
])
