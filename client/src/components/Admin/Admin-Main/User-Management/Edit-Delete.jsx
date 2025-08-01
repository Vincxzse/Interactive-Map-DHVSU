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
                const response = await fetch("http://localhost:5000/update-user", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });
                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    navigate("/admin/user-management");
                    window.location.reload();
                } else {
                    alert(result.message || "Failed to edit details");
                }
            } catch (err) {
                console.error(err.message);
                alert("Something went wrong. Please try again.");
            }
        }
    }
    
    const handleConfirmationResult = (isConfirmed) => {
        // isConfirmed ? console.log("Passwords Matched, BOBO!") : console.log("Passwords failed to match.");
        isConfirmed ? handleConfirmed() : alert("Confirmation failed.");
    }

    const handleChange = (e) => {
        setRole(e.target.value);
        console.log(role);
    }

    const isUnchanged = username === props.user.username && email === props.user.email && role === props.user.role;
    return(
        <>
            {showConfirmation ? <Confirmation onSendData = { handleCloseConfirmation } onConfirm = { handleConfirmationResult } /> : null}
            <div className="flex flex-col items-center justify-center h-screen w-screen fixed z-1 bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-6/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = { props.onSendData } />
                    <form 
                        className="flex flex-col w-full h-full gap-2" 
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleShowConfirmation("save")
                        }}
                    >
                        <h2 className="text-2xl text-white font-sans font-bold tracking-wider mb-2">Edit / Delete User</h2>
                        <PopupField 
                            label='Username'
                            type='text'
                            name='username'
                            value={ username }
                            setValue={ setUsername }
                        />
                        <PopupField 
                            label='Email'
                            type='email'
                            name='email'
                            value={ email }
                            setValue={ setEmail }
                        />
                        <select 
                            id="role"
                            value={role} 
                            onChange={handleChange}
                            className="flex items-center justify-center w-full h-auto text-start text-white cursor-pointer bg-[#353B45] focus:outline-0"
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="super admin">Super Admin</option>
                        </select>
                        <div className="grid grid-cols-2 grid-rows-1 gap-2">
                            <input 
                                type="submit" 
                                value='Save' 
                                className={`flex items-center justify-center h-10 w-full border-3 text-white text-lg rounded-md font-normal transition-[.1s] ${isUnchanged ? "bg-gray-400 cursor-not-allowed border-gray-400" : "bg-[#46E17F] border-[#46E17F] hover:bg-transparent cursor-pointer"}`}
                                disabled={isUnchanged}
                            />
                            <button
                                className="flex items-center justify-center h-10 w-full border-3 border-[#D32F2F] bg-[#D32F2F] text-white text-lg rounded-md hover:bg-transparent font-normal transition-[.1s] cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                    {/* { console.log("UserID: ", props.user) } */}
                </div>
            </div>
        </>
    );
}

export default EditDelete;