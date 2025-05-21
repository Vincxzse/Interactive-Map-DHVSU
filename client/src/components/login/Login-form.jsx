import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import keyIcon from "../../assets/key.png";
import userIcon from "../../assets/user.png";

function LoginForm(props) {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
        alert("Please fill in all fields.");
    } else {
        try {
            const body = { username, password };
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const data = await response.json();

            if (response.ok) {
                alert("Login Successful!");
                localStorage.setItem("userID", data.user.id);
                navigate("/home");
            } else {
                alert(data.message || "Login failed.");
            }
        } catch (err) {
            console.error(err.message);
            alert("Something went wrong. Please try again.");
        }
    }
};


    function jumpToRegistration() {
        navigate('/register');
    }

    return (
        <Fragment>
            <form onSubmit={handleLogin} className='flex flex-col gap-5 w-90 my-10'>
                <div className='flex flex-row border-1 justify-center h-8 w-full py-1 px-2 border-transparent border-b-red-600 bg-[#C5C3C3]'>
                    <img src={ userIcon } className='h-full'/>
                    <input type='text' className='focus:outline-none w-full px-2' placeholder={ props.usernamePlaceholder } onChange={ e => setUsername(e.target.value) } />
                </div>
                <div className='flex flex-row border-1 justify-center h-8 w-full py-1 px-2 border-transparent border-b-red-600 bg-[#C5C3C3]'>
                    <img src={ keyIcon } className='h-full'/>
                    <input type='password' className='focus:outline-none w-full px-2' placeholder={ props.passwordPlaceholder } onChange={ e => setPassword(e.target.value) } />
                </div>
                <input type='submit' value='Login' className='bg-[#7A0101] h-8 text-[#D5C000] text-lg font-extrabold hover:bg-[#990303] transition-[.1s] cursor-pointer hover:text-amber-300' />
                <div className='flex flex-row items-center justify-center gap-2'>
                    <p>Forgot password?</p>
                    <a className='text-blue-400 hover:text-blue-600'>Click here</a>
                </div>
                <a className='flex items-center justify-center w-full text-center h-8 border-2 border-[#7A0101] hover:bg-amber-300 transition-[.1s] font-extrabold cursor-pointer' onClick={jumpToRegistration}>Register New Account</a>
            </form>
        </Fragment>
    );
}

export default LoginForm;