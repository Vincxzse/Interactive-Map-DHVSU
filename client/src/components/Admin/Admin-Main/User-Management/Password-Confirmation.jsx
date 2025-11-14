import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CloseBtn from "../../../Close-Button";
import PopupField from "./Popup-Field";

function Confirmation(props) {
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const adminID = localStorage.getItem('userID');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        
        if (!password) {
            setError('Password is required');
            return;
        }
        
        setIsLoading(true);
        setError('');
        
        try {
            const body = { adminID, password };
            const response = await fetch(`${BACKEND_URL}/password-confirmation`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            
            if (response.ok) {
                const data = result.response;
                props.onConfirm(data);
                navigate("/admin/user-management");
            } else {
                setError(result.message || "Incorrect password");
            }
        } catch (err) {
            console.error(err.message);
            setError("Connection failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }
    
    return(
        <>
            {/* Backdrop */}
            <div className="flex items-center justify-center h-screen w-screen fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4">
                {/* Modal Container */}
                <div className="relative flex flex-col items-center justify-start w-full max-w-[95%] sm:max-w-md md:max-w-lg bg-[#2B313C] shadow-2xl rounded-2xl p-5 sm:p-8 md:p-10 animate-scale-in">
                    <CloseBtn onSendData={props.onSendData} />
                    
                    {/* Header */}
                    <div className="flex flex-col items-center w-full mb-6">
                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500/20 mb-4 border-2 border-yellow-500/40">
                            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide text-center mb-2">
                            Admin Confirmation
                        </h2>
                        <p className="text-[#A0A7B4] text-sm sm:text-base text-center">
                            Enter your password to authorize this action
                        </p>
                    </div>
                    
                    {/* Security Notice */}
                    <div className="flex items-start gap-2 w-full p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-4">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-blue-200 text-xs sm:text-sm">
                            This action requires admin verification for security purposes.
                        </p>
                    </div>
                    
                    {/* Form */}
                    <form 
                        className="flex flex-col w-full gap-4"
                        onSubmit={onSubmitForm}
                    >
                        {/* Password Field with Toggle */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#A0A7B4] text-sm font-medium">
                                Admin Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError('');
                                    }}
                                    className="w-full px-4 py-3 pr-12 text-white bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                                    placeholder="Enter your password"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7B4] hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        
                        {/* Error Message */}
                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-red-200 text-sm">{error}</p>
                            </div>
                        )}
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || !password}
                            className="flex items-center justify-center h-12 sm:h-14 w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white text-base sm:text-lg font-semibold rounded-xl transition-all active:scale-95 mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Confirm Action
                                </>
                            )}
                        </button>
                        
                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => props.onSendData(false)}
                            disabled={isLoading}
                            className="flex items-center justify-center h-10 sm:h-12 w-full bg-transparent border-2 border-[#4CA7E1] text-[#4CA7E1] hover:bg-[#4CA7E1] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-semibold rounded-xl transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                    </form>
                    
                    {/* Footer Note */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-[#A0A7B4] text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Your session is secure and encrypted</span>
                    </div>
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

export default Confirmation;