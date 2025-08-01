import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CloseBtn from "../../../Close-Button";
import PopupField from "./Popup-Field";

function Confirmation(props) {
    const navigate = useNavigate();
    const adminID = localStorage.getItem('userID');
    const [password, setPassword] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { adminID, password };
            const response = await fetch("http://localhost:5000/password-confirmation", {
                method: "POST",
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

    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen fixed z-2 bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-5/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = { props.onSendData } />
                    <div className="flex flex-col h-full w-full items-start justify-start gap-5">
                        <h2 className="text-2xl font-sans text-white font-bold tracking-wide">Admin Confirmation</h2>
                        <form 
                            className="flex flex-col w-full h-full gap-2 items-center justify-center"
                            onSubmit={ onSubmitForm }
                        >
                            <PopupField
                                label = "Enter your password to continue"
                                type = "password"
                                name = "password"
                                value = { password }
                                setValue = { setPassword }
                            />
                            <input 
                                type="submit" 
                                value="Confirm" 
                                className="flex items-center justify-center h-10 w-full border-3 border-[#D32F2F] bg-[#D32F2F] text-white text-lg rounded-md hover:bg-transparent font-normal transition-[.1s] cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirmation;