import { useState } from "react";
import keyIcon from "../../assets/key.png";
import userIcon from "../../assets/user.png";
import emailIcon from "../../assets/mail.png";
import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const onSubmitForm = async(e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
        } else {
            if (password === confirmPassword) {
                try {
                    const body = { username, email, password };
                    const response = await fetch(`${BACKEND_URL}/register-account`, {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    });

                    if (response.ok) {
                        const result = await response.json()
                        navigate("/")
                    } else {
                        const error = await response.json();
                        alert(error.message || "Registration failed.");
                    }

                    
                } catch (err) {
                    console.error(err.message);
                }
            } else {
                alert("Passwords do not match!");
            }
        }

        
    }

    return(
        <>
            <form onSubmit={onSubmitForm} className='flex flex-col w-[80%] xl:w-[60%] gap-3 my-5'>
                <div className='flex flex-row border-1 justify-center h-13 w-full py-3 px-5 border-transparent bg-slate-200 items-center rounded-md'>
                    <img src={ emailIcon } className='h-full invert-[50%]'/>
                    <input type='email' className='focus:outline-none w-full h-full px-2 text-lg text-[rgb(0,0,0)]' placeholder={ props.emailPlaceholder } name="email" onChange={ e => setEmail(e.target.value) } />
                </div>
                <div className='flex flex-row border-1 justify-center h-13 w-full py-3 px-5 border-transparent bg-slate-200 items-center rounded-md'>
                    <img src={ userIcon } className='h-full invert-[50%]'/>
                    <input type='text' className='focus:outline-none w-full h-full px-2 text-lg text-[rgb(0,0,0)]' placeholder={ props.usernamePlaceholder } name="username" onChange={ e => setUsername(e.target.value) } />
                </div>
                <div className='flex flex-row border-1 justify-center h-13 w-full py-3 px-5 border-transparent bg-slate-200 items-center rounded-md'>
                    <img src={ keyIcon } className='h-full invert-[50%]'/>
                    <input type='password' className='focus:outline-none w-full h-full px-2 text-lg text-[rgb(0,0,0)]' placeholder={ props.passwordPlaceholder } name="password" onChange={ e => setPassword(e.target.value) } />
                </div>
                <div className='flex flex-row border-1 justify-center h-13 w-full py-3 px-5 border-transparent bg-slate-200 items-center rounded-md'>
                    <img src={ keyIcon } className='h-full invert-[50%]'/>
                    <input type='password' className='focus:outline-none w-full h-full px-2 text-lg text-[rgb(0,0,0)]' placeholder={ props.confirmPasswordPlaceholder } name="confirmPassword" onChange={ e => setConfirmPassword(e.target.value) } />
                </div>
                <div className="flex items-center justify-center w-full">
                    <input type="submit" value='SIGN UP' className="flex items-center justify-center h-15 border-2 border-[#D32F2F] bg-[#D32F2F] text-white text-xl rounded-full mt-5 w-[50%] hover:bg-transparent font-bold hover:text-black transition-[.1s] cursor-pointer" />
                </div>
            </form>
        </>
    );
}

export default RegistrationForm;