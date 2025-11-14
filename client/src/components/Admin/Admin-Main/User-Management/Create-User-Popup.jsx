import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupField from "./Popup-Field";
import CloseBtn from "../../../Close-Button";

function CreateUserPopUp(props) {
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmitForm = async(e) => {
        e.preventDefault();
        
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        
        setIsLoading(true);
        
        try {
            const body = { username, email, password };
            const response = await fetch(`${BACKEND_URL}/register-account`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            
            if (response.ok) {
                const result = await response.json();
                alert("User created successfully!");
                props.onSendData(false);
                window.location.reload();
            } else {
                const error = await response.json();
                alert(error.message || "Registration failed.");
            }
        } catch (err) {
            console.error(err.message);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <>
            {/* Backdrop */}
            <div className="flex items-center justify-center h-screen w-screen fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
                {/* Modal Container */}
                <div className="relative flex flex-col items-center justify-start w-full max-w-[95%] sm:max-w-md md:max-w-lg bg-[#2B313C] shadow-2xl rounded-2xl p-5 sm:p-8 md:p-10 my-4 animate-scale-in">
                    <CloseBtn onSendData={props.onSendData} />
                    
                    {/* Header */}
                    <div className="flex flex-col items-center w-full mb-6">
                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/20 mb-4">
                            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide text-center">
                            Create New User
                        </h2>
                        <p className="text-[#A0A7B4] text-sm sm:text-base text-center mt-2">
                            Fill in the details to create a new account
                        </p>
                    </div>
                    
                    {/* Form */}
                    <form onSubmit={onSubmitForm} className='flex flex-col w-full gap-4'>
                        <PopupField 
                            setValue={setEmail} 
                            label="Email Address" 
                            type='email' 
                            name='email'
                            placeholder="user@example.com"
                        />
                        
                        <PopupField 
                            setValue={setUsername} 
                            label="Username" 
                            type='text' 
                            name='username'
                            placeholder="Enter username"
                        />
                        
                        <PopupField 
                            setValue={setPassword} 
                            label="Password" 
                            type='password' 
                            name='password'
                            placeholder="Min. 8 characters"
                        />
                        
                        <PopupField 
                            setValue={setConfirmPassword} 
                            label="Confirm Password" 
                            type='password' 
                            name='confirmPassword'
                            placeholder="Re-enter password"
                        />
                        
                        {/* Password Strength Indicator */}
                        {password && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#353B45] rounded-lg">
                                <div className="flex gap-1 flex-1">
                                    <div className={`h-1.5 flex-1 rounded ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                    <div className={`h-1.5 flex-1 rounded ${password.length >= 12 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                    <div className={`h-1.5 flex-1 rounded ${password.length >= 16 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                </div>
                                <span className={`text-xs font-medium ${
                                    password.length >= 16 ? 'text-green-400' : 
                                    password.length >= 12 ? 'text-yellow-400' : 
                                    password.length >= 8 ? 'text-orange-400' : 'text-red-400'
                                }`}>
                                    {password.length >= 16 ? 'Strong' : 
                                     password.length >= 12 ? 'Good' : 
                                     password.length >= 8 ? 'Fair' : 'Weak'}
                                </span>
                            </div>
                        )}
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center justify-center h-12 sm:h-14 w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white text-base sm:text-lg font-semibold rounded-xl transition-all active:scale-95 mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Create User
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
            
            {/* Animation Styles */}
            <style jsx>{`
                @keyframes scale-in {
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                .animate-scale-in {
                    animation: scale-in 0.2s ease-out;
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </>
    )
}

export default CreateUserPopUp;