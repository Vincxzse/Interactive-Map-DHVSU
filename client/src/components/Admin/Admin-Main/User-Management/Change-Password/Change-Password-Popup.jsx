import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseBtn from "../../../../Close-Button";
import PopupField from "../Popup-Field";

function ChangePasswordPopup(props) {
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.id;
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please fill in all the fields.");
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match.");
            return;
        }
        
        if (newPassword.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        
        if (oldPassword === newPassword) {
            alert("New password must be different from old password.");
            return;
        }
        
        setIsLoading(true);
        
        try {
            const body = { uid, oldPassword, newPassword };
            const response = await fetch(`${BACKEND_URL}/admin-change-password`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            
            if (response.ok) {
                alert(result.message);
                props.onSendData(false);
                navigate("/admin/overview");
                window.location.reload();
            } else {
                alert(result.message);
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
                    <div className="flex items-center gap-3 mb-6 w-full">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-500/20">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                                Change Password
                            </h2>
                            <p className="text-[#A0A7B4] text-xs sm:text-sm mt-1">
                                Update your account password
                            </p>
                        </div>
                    </div>
                    
                    {/* Form */}
                    <form
                        onSubmit={onSubmitForm}
                        className="flex flex-col w-full gap-4"
                    >
                        {/* Old Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#A0A7B4] text-sm font-medium">Current Password</label>
                            <div className="relative">
                                <input
                                    type={showOldPassword ? "text" : "password"}
                                    name="old_password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 text-white bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    placeholder="Enter current password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7B4] hover:text-white transition-colors"
                                >
                                    {showOldPassword ? (
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
                        
                        {/* Divider */}
                        <div className="border-t border-[#3F464F] my-2"></div>
                        
                        {/* New Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#A0A7B4] text-sm font-medium">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    name="new_password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 text-white bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    placeholder="Enter new password (min. 8 characters)"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7B4] hover:text-white transition-colors"
                                >
                                    {showNewPassword ? (
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
                        
                        {/* Password Strength */}
                        {newPassword && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#353B45] rounded-lg">
                                <div className="flex gap-1 flex-1">
                                    <div className={`h-1.5 flex-1 rounded ${newPassword.length >= 8 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                    <div className={`h-1.5 flex-1 rounded ${newPassword.length >= 12 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                    <div className={`h-1.5 flex-1 rounded ${newPassword.length >= 16 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                                </div>
                                <span className={`text-xs font-medium ${
                                    newPassword.length >= 16 ? 'text-green-400' : 
                                    newPassword.length >= 12 ? 'text-yellow-400' : 
                                    newPassword.length >= 8 ? 'text-orange-400' : 'text-red-400'
                                }`}>
                                    {newPassword.length >= 16 ? 'Strong' : 
                                     newPassword.length >= 12 ? 'Good' : 
                                     newPassword.length >= 8 ? 'Fair' : 'Weak'}
                                </span>
                            </div>
                        )}
                        
                        {/* Confirm Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#A0A7B4] text-sm font-medium">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirm_password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 text-white bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    placeholder="Re-enter new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7B4] hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? (
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
                        
                        {/* Password Match Indicator */}
                        {confirmPassword && (
                            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                                newPassword === confirmPassword 
                                    ? 'bg-green-500/10 border border-green-500/30' 
                                    : 'bg-red-500/10 border border-red-500/30'
                            }`}>
                                {newPassword === confirmPassword ? (
                                    <>
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-green-400 text-sm">Passwords match</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="text-red-400 text-sm">Passwords don't match</span>
                                    </>
                                )}
                            </div>
                        )}
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center justify-center h-12 sm:h-14 w-full bg-purple-500 hover:bg-purple-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white text-base sm:text-lg font-semibold rounded-xl transition-all active:scale-95 mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </>
                            ) : (
                                'Change Password'
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
    ); 
}

export default ChangePasswordPopup;