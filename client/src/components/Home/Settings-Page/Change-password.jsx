import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState(""); // Old password
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();

        // Get the user ID from localStorage
        const userID = localStorage.getItem("userID");

        if (!userID) {
            alert("User is not logged in");
            return;
        }

        if (!password || !newPassword || !confirmNewPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const body = { userID, oldPassword: password, newPassword };
            const response = await fetch("http://localhost:5000/change-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                navigate("/home");
                window.location.reload();
            } else {
                alert(result.message || "Password change failed");
            }
        } catch (err) {
            console.error(err.message);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <form className="flex flex-col w-full" onSubmit={onSubmitForm}>
                <h1 className="text-2xl font-semibold text-center text-[#DC3C3C] mb-5">Change Password</h1>
                
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Old Password"
                        className="w-full h-10 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#DC3C3C] focus:border-[#DC3C3C] transition duration-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        className="w-full h-10 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#DC3C3C] focus:border-[#DC3C3C] transition duration-200"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        name="ConfirmNewPassword"
                        placeholder="Confirm New Password"
                        className="w-full h-10 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#DC3C3C] focus:border-[#DC3C3C] transition duration-200"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                <input
                    type="submit"
                    value="Change Password"
                    className="w-full h-10 bg-[#DC3C3C] text-white text-lg font-semibold rounded-md cursor-pointer hover:bg-[#C22E2E] transition duration-200"
                />
            </form>

        </>
    );
}

export default ChangePassword;
