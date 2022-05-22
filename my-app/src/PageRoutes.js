import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

const PageRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route path="*" element={<div>404 Page not found</div>} />
            </ Routes>
        </BrowserRouter>
    )

}

export default PageRoutes;