import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseBtn from "../../../../Close-Button";
import PopupField from "../Popup-Field";

function ChangePasswordPopup(props) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.id;
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please fill in all the fields.");
        } else if (newPassword !== confirmPassword) {
            alert("Passwords did not match.");
        } else {
            try {
                const body = { uid, oldPassword, newPassword };
                const response = await fetch("http://localhost:5000/admin-change-password", {
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
            }
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen fixed z-1 bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-7/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = { props.onSendData } />
                    <div className="flex flex-col w-full h-full items-start justify-between gap-4">
                        <h2 className="text-white text-2xl font-sans font-bold tracking-wide w-full">Change Password</h2>
                        <form
                            onSubmit={ onSubmitForm }
                            className="flex flex-col items-start justify-start w-full gap-2"
                        >
                            <PopupField
                                label = "Old Password"
                                type = "password"
                                name = "old_password"
                                setValue = { setOldPassword }
                            />
                            <PopupField
                                label = "New Password"
                                type = "password"
                                name = "new_password"
                                setValue = { setNewPassword }
                            />
                            <PopupField
                                label = "Confirm Password"
                                type = "password"
                                name = "confirm_password"
                                setValue = { setConfirmPassword }
                            />
                            <div className="flex items-center justify-center w-full">
                                <input type="submit" value='Submit' className="flex items-center justify-center h-10 w-full border-3 border-[#D32F2F] bg-[#D32F2F] text-white text-lg rounded-md hover:bg-transparent font-normal transition-[.1s] cursor-pointer mt-2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default ChangePasswordPopup;