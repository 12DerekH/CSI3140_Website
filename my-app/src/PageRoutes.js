import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import Profile from './pages/Profile';
import QuizMaker from './pages/QuizMaker';

const PageRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/maker" element={<QuizMaker/>} />
                <Route path="*" element={<div>404 Page not found</div>} />
            </Routes>
        </BrowserRouter>
    )

}

export default PageRoutes;