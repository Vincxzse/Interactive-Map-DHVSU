import React, { Fragment, useState } from 'react';
import ChangePassword from './Change-password.jsx';
import ChangeUsername from './Change-Username.jsx';
import closeIcon from '../../../assets/close.png';

function SettingsPage() {
    const [changePasswordPopUp, setChangePasswordPopUp] = useState(false);
    const [changeUsernamePopUp, setChangeUsernamePopUp] = useState(false);

    // Handle Change Password Pop-up
    function handleShowChangePassword(e) {
        e.preventDefault();
        setChangePasswordPopUp(true);
        setChangeUsernamePopUp(false);
    }
    function handleHideChangePassword(e) {
        e.preventDefault();
        setChangePasswordPopUp(false);
    }
    
    // Handle Change Username Pop-up
    function handleShowChangeUsername(e) {
        e.preventDefault();
        setChangeUsernamePopUp(true);
        setChangePasswordPopUp(false);
    }
    function handleHideChangeUsername(e) {
        e.preventDefault();
        setChangeUsernamePopUp(false);
    }

    return(
        <Fragment>
            <div className='flex flex-col h-[calc(100%-50px)] w-[calc(100%-50px)] bg-transparent gap-5'>
                <div className='w-full'>
                    <h2 className='text-3xl font-mono text-slate-800 font-bold'>Settings</h2>
                </div>
                <hr className='w-full border-1 rounded-full border-slate-500' />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-slate-800 text-lg font-mono'>Customize Character</h2>
                    <div className='flex flex-col xl:flex-row gap-0 xl:gap-4 justify-start items-start xl:items-center'>
                        <a href='#' className='flex w-3xs min-w-3xs h-10 items-center justify-center bg-[#DC3C3C] text-white rounded-xl'>Customize Character</a>
                        <p>(Edit your character outfit)</p>
                    </div>
                </div>
                <hr className='w-full bg-slate-500 border-slate-500 opacity-50' />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-slate-800 text-lg font-mono'>Personal Info and security</h2>
                    <div className='flex flex-col xl:flex-row gap-0 xl:gap-4 justify-start items-start xl:items-center'>
                        <a href='' className='flex w-3xs min-w-3xs h-10 items-center justify-center bg-[#DC3C3C] text-white rounded-xl' onClick={handleShowChangePassword}>Change Password</a>
                        <p>(We recommend updating your password regularly to keep your account secure.)</p>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-0 xl:gap-4 justify-start items-start xl:items-center'>
                        <a href='' className='flex w-3xs min-w-3xs h-10 items-center justify-center bg-[#DC3C3C] text-white rounded-xl' onClick={handleShowChangeUsername}>Change Username</a>
                        <p>Change Username</p>
                    </div>
                </div>
                <hr className='w-full bg-slate-500 border-slate-500 opacity-50' />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-slate-800 text-lg font-mono'>Account Controls</h2>
                </div>

                {/* Change Password Pop-up */}
                {changePasswordPopUp ? 
                    (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                            <div className="fixed w-[70%] xl:w-[30rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-5 xl:py-10 px-10 xl:px-20 rounded-2xl shadow-lg">
                                <a href="" className="fixed right-5 top-5 h-auto w-auto" onClick={handleHideChangePassword}><img src={closeIcon} className='h-5 w-auto hover:invert-50' /></a>
                                <ChangePassword />
                            </div>
                        </div>
                    ) : null
                }

                {changeUsernamePopUp ?
                    (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                            <div className="fixed w-[20rem] md:w-[25rem] xl:w-[30rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-5 xl:py-10 px-10 xl:px-20 rounded-2xl shadow-lg">
                                <a href="" className="fixed right-5 top-5 h-auto w-auto" onClick={handleHideChangeUsername}><img src={closeIcon} className='h-5 w-auto hover:invert-50' /></a>
                                <ChangeUsername />
                                {/* Continue here */}
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </Fragment>
    );
}

export default SettingsPage;