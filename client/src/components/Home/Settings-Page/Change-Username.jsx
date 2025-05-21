import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangeUsername() {
    const navigate = useNavigate();

    const [newUsername, setNewUsername] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();

        const userID = localStorage.getItem("userID");
        console.log("User ID: " + userID)

        if (!userID) {
            alert("User is not logged in");
            return
        }

        try {
            const body = { userID, newUsername };
            const response = await fetch("http://localhost:5000/change-username", {
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
                alert(result.message || "Failed to change username");
            }
        } catch (err) {
            console.error(err.message);
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <>
            <form className="flex flex-col w-full" onSubmit={onSubmitForm}>
                <h1 className="text-2xl font-semibold text-center text-[#DC3C3C] mb-5">Change Username</h1>
                
                <div className="mb-4">
                    <input
                        type="text"
                        name="newUsername"
                        placeholder="Enter your new username"
                        className="w-full h-10 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#DC3C3C] focus:border-[#DC3C3C] transition duration-200"
                        onChange={ (e) => setNewUsername(e.target.value) }
                    />
                </div>
                
                <input
                    type="submit"
                    value="Change Username"
                    className="w-full h-10 bg-[#DC3C3C] text-white text-lg font-semibold rounded-md cursor-pointer hover:bg-[#C22E2E] transition duration-200"
                />
            </form>
        </>
    )
}

export default ChangeUsername;