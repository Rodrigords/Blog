import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'
import NavComponent from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className='app'>
            <NavComponent/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>