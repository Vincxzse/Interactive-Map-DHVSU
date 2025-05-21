import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './Registration-form.jsx';
import dhvsuLogo from '../../assets/logo.png';
import dlcCampus from '../../assets/Dhvsu-campus.jpg';

function RegistrationPage(props) {
    const navigate = useNavigate();

    function jumpToLogin() {
        navigate('/');
    }

    return (
        <Fragment>
            <div 
                className='flex items-center justify-center w-full h-full font-sans'
                style={{
                    backgroundImage: `url(${dlcCampus})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    zIndex: `-1`,
                }}
            >
                <div className='grid xl:grid-cols-[2fr_3fr] w-full h-full md:w-[calc(100%-300px)] md:h-[calc(100%-100px)] rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.7)] z-10'>
                    <div className='hidden xl:flex items-center justify-center w-full h-full rounded-tl-2xl rounded-bl-2xl text-white bg-gradient-to-tr from-[#FFD700] to-[#FA8072]'>
                        <div className='flex flex-col h-11/12 w-11/12'>
                            <div className='flex flex-row h-[40px] w-full items-center gap-2'>
                                <img src={ dhvsuLogo } className='h-10 w-auto rounded-full shadow-[0_0_10px_rgba(0,0,0,0.7)]' />
                                <h2 className='font-extrabold tracking-tight'>Dhvsu | Lubao Campus</h2>
                            </div>
                            <div className='flex flex-col w-full items-center my-auto'>
                                <div className='flex flex-col w-[75%] text-center gap-10'>
                                    <h1 className='text-5xl font-bold tracking-tight'>Welcome Back!</h1>
                                    <p>To keep connected with us, please login with your personal info</p>
                                    <a className='flex h-15 w-full items-center justify-center rounded-full border-2 border-white text-xl hover:bg-[rgb(0,0,0,0.3)] hover:border-[rgb(0,0,0,0.1)] transition-colors font-bold cursor-pointer' onClick={jumpToLogin}>SIGN IN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white xl:rounded-tr-2xl xl:rounded-br-2xl flex flex-col items-center justify-center text-slate-600'>
                        <div className='flex flex-col items-center justify-center w-[80%] h-[80%] gap-0'>
                            <div className='xl:hidden flex flex-row h-[40px] items-center gap-2'>
                                <img src={ dhvsuLogo } className='h-10 w-auto rounded-full shadow-[0_0_10px_rgba(0,0,0,0.7)]' />
                                <h2 className='font-extrabold tracking-tight'>Dhvsu | Lubao Campus</h2>
                            </div>
                            <h2 className='text-5xl font-bold tracking-tighter mb-5'>Create Account</h2>
                            <hr className='hidden xl:block border-[rgb(0,0,0,0.3)] border-1 rounded-full w-[65%] my-5' />
                            <RegistrationForm
                                emailPlaceholder = "Email"
                                usernamePlaceholder = 'Username'
                                passwordPlaceholder = 'Password'
                                confirmPasswordPlaceholder = 'Confirm Password'
                            />
                            <hr className='xl:hidden border-[rgb(0,0,0,0.3)] border-1 rounded-full w-[80%] mb-5' />
                            <div className='xl:hidden flex flex-row gap-1'>
                                <p>Already have an account?</p>
                                <a className='text-blue-600 hover:text-blue-300' onClick={jumpToLogin}>Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistrationPage;