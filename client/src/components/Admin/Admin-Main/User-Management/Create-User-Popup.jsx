import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupField from "./Popup-Field";
import CloseBtn from "../../../Close-Button";

function CreateUserPopUp(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
        } else {
            if (password === confirmPassword) {
                try {
                    const body = { username, email, password };
                    const response = await fetch("http://localhost:5000/register-account", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    });

                    if (response.ok) {
                        const result = await response.json()
                        if (result.role === 'super admin') {
                            navigate('/admin');
                        } else {
                            navigate('/home');
                        }
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

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen fixed z-1 bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-8/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = {props.onSendData} />
                    {/* Form */}
                    <div className="flex flex-col h-full w-full items-center justify-center">
                        <h2 className="text-white text-3xl text-center font-sans font-bold tracking-wide w-full">Create a User</h2>
                        <form onSubmit={onSubmitForm} className='flex flex-col w-full gap-1 my-5'>
                            <PopupField setValue={ setEmail } label="Email" type='email' name='email' />
                            <PopupField setValue={ setUsername } label="Username" type='text' name='username' />
                            <PopupField setValue={ setPassword } label="Set Password" type='password' name='password' />
                            <PopupField setValue={ setConfirmPassword } label="Confirm Password" type='password' name='confirmPassword' />
                            <div className="flex items-center justify-center w-full">
                                <input type="submit" value='Create' className="flex items-center justify-center h-10 w-full border-3 border-[#D32F2F] bg-[#D32F2F] text-white text-lg rounded-md hover:bg-transparent font-normal transition-[.1s] cursor-pointer mt-2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUserPopUp;