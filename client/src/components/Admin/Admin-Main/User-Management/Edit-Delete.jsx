import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "./Password-Confirmation";
import CloseBtn from "../../../Close-Button";
import PopupField from "./Popup-Field";

function EditDelete(props) {
    const [role, setRole] = useState(props.user.role);
    const [username, setUsername] = useState(props.user.username);
    const [email, setEmail] = useState(props.user.email);
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // Confirmation Pop-up
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [actionType, setActionType] = useState(null);

    const handleShowConfirmation = (type) => {
        setActionType(type);
        setShowConfirmation(true);
    }

    const handleCloseConfirmation = (data) => {
        setShowConfirmation(data);
        console.log("Received from Close Button: ", data);
    }

    const handleConfirmed = async() => {
        setShowConfirmation(false);
        const userID = props.user.id;
        
        if (actionType === "save") {
            try {
                const body = { userID, username, email, role };
                const response = await fetch(`${BACKEND_URL}/update-user`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });
                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                } else {
                    alert(result.message || "Failed to edit details");
                }
            } catch (err) {
                console.error(err.message);
                alert("Something went wrong. Please try again.");
            }
        } else if (actionType === "delete") {
            try {
                const response = await fetch(`${BACKEND_URL}/delete-user/${userID}`, {
                    method: "DELETE"
                });
                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    navigate(0);
                } else {
                    alert(result.message || "Failed to delete user.");
                }
            } catch (err) {
                console.error(err.message);
                alert("Something went wrong. Please try again.");
            }
        }
    }
    
    const handleConfirmationResult = (isConfirmed) => {
        isConfirmed ? handleConfirmed() : alert("Confirmation failed.");
    }

    const handleChange = (e) => {
        setRole(e.target.value);
        console.log(role);
    }

    const isUnchanged = username === props.user.username && email === props.user.email && role === props.user.role;
    
    return(
        <>
            {showConfirmation ? <Confirmation onSendData={handleCloseConfirmation} onConfirm={handleConfirmationResult} /> : null}
            
            {/* Backdrop */}
            <div className="flex items-center justify-center h-screen w-screen fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
                {/* Modal Container */}
                <div className="relative flex flex-col items-center justify-start w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#2B313C] shadow-2xl rounded-2xl p-5 sm:p-8 md:p-10 my-4 animate-scale-in">
                    <CloseBtn onSendData={props.onSendData} />
                    
                    <form 
                        className="flex flex-col w-full gap-4 sm:gap-5" 
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleShowConfirmation("save")
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl text-white font-bold tracking-wide">
                                Edit User
                            </h2>
                        </div>
                        
                        {/* User ID Badge */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#353B45] rounded-lg">
                            <span className="text-[#A0A7B4] text-xs sm:text-sm">User ID:</span>
                            <span className="text-white text-xs sm:text-sm font-mono font-semibold">{props.user.id}</span>
                        </div>
                        
                        {/* Form Fields */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <PopupField 
                                label='Username'
                                type='text'
                                name='username'
                                value={username}
                                setValue={setUsername}
                            />
                            
                            <PopupField 
                                label='Email'
                                type='email'
                                name='email'
                                value={email}
                                setValue={setEmail}
                            />
                            
                            {/* Role Select */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#A0A7B4] text-sm font-medium">Role</label>
                                <select 
                                    id="role"
                                    value={role} 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-white bg-[#353B45] rounded-lg border border-[#3F464F] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="super admin">Super Admin</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mt-2">
                            {/* Save Button */}
                            <input 
                                type="submit" 
                                value='Save Changes' 
                                className={`flex items-center justify-center h-11 sm:h-12 w-full text-white text-base sm:text-lg font-semibold rounded-xl transition-all ${
                                    isUnchanged 
                                        ? "bg-gray-500 cursor-not-allowed opacity-50" 
                                        : "bg-green-500 hover:bg-green-600 cursor-pointer active:scale-95"
                                }`}
                                disabled={isUnchanged}
                            />
                            
                            {/* Delete Button */}
                            <button
                                type="button"
                                className="flex items-center justify-center h-11 sm:h-12 w-full bg-red-500 hover:bg-red-600 text-white text-base sm:text-lg font-semibold rounded-xl transition-all cursor-pointer active:scale-95 gap-2"
                                onClick={() => handleShowConfirmation("delete")}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Delete User
                            </button>
                        </div>
                        
                        {/* Warning Message */}
                        {!isUnchanged && (
                            <div className="flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className="text-yellow-200 text-xs sm:text-sm">
                                    You have unsaved changes. Click "Save Changes" to apply them.
                                </p>
                            </div>
                        )}
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
            `}</style>
        </>
    );
}

export default EditDelete;