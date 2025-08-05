import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './Login-form.jsx';
import dhvsuLogo from '../../assets/logo.png';
import campusImg from '../../assets/Dhvsu-campus.jpg';

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <div className='grid xl:grid-cols-[1fr_2fr] w-full h-full bg-red-400'>
                <div className='bg-white flex flex-col items-center justify-center gap-3 font-mono'>
                    <div className='w-60 h-auto'>
                        <img src={ dhvsuLogo } className='w-full h-full' />
                    </div>
                    <div className=''>
                        <h1 className='tracking-wider text-yellow-500 text-2xl font-extrabold'>Login</h1>
                    </div>
                    <div>
                        <p className='text-slate-600'>Sign in to your account</p>
                    </div>
                    <div>
                        <LoginForm
                            emailPlaceholder = 'Email'
                            passwordPlaceholder = 'Password'
                        />
                    </div>
                </div>
                <div className='bg-blue-500 w-full overflow-hidden hidden xl:block'>
                    <img src={ campusImg } className='w-max h-max' />
                </div>
            </div>
        </>
    );
}

export default LoginPage;