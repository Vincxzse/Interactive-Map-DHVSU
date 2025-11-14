import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState({ text: "", type: "" });
    const [loading, setLoading] = useState(false);

    const handleSaveUsername = async () => {
        try {
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/change-username`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: username,
                    id: user.id
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: data.message, type: "success" });
                // Update localStorage with new username
                const updatedUser = { ...user, username: username };
                localStorage.setItem("user", JSON.stringify(updatedUser));
            } else {
                setMessage({ text: data.message, type: "error" });
                // Reset to original username if failed
                setUsername(user.username);
            }
        } catch (err) {
            console.error("Error updating username:", err);
            setMessage({ text: "Failed to update username. Please try again.", type: "error" });
            setUsername(user.username);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveEmail = async () => {
        try {
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/change-email`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: email,
                    id: user.id
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: data.message, type: "success" });
                // Update localStorage with new email
                const updatedUser = { ...user, email: email };
                localStorage.setItem("user", JSON.stringify(updatedUser));
            } else {
                setMessage({ text: data.message, type: "error" });
                // Reset to original email if failed
                setEmail(user.email);  // ← Fixed this
            }
        } catch (err) {
            console.error("Error updating email:", err);
            setMessage({ text: "Failed to update email. Please try again.", type: "error" });
            setEmail(user.email);
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordChange = async () => {
        try {
            // Validation
            if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
                setMessage({ text: "Please fill in all password fields", type: "error" });
                return;
            }
            
            if (passwordForm.newPassword !== passwordForm.confirmPassword) {
                setMessage({ text: "New passwords do not match", type: "error" });
                return;
            }
            
            if (passwordForm.newPassword.length < 6) {
                setMessage({ text: "New password must be at least 6 characters", type: "error" });
                return;
            }
            
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/change-password`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    currentPassword: passwordForm.currentPassword,
                    newPassword: passwordForm.newPassword,
                    id: user.id
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: data.message, type: "success" });
                setShowPasswordModal(false);
                setPasswordForm({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                });
            } else {
                setMessage({ text: data.message, type: "error" });
            }
        } catch (err) {
            console.error("Error changing password:", err);
            setMessage({ text: "Failed to change password. Please try again.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Success/Error Message */}
            
            <div className="flex flex-col w-full min-h-full bg-gradient-to-br from-[#1a1f28] to-[#252b38] p-4 md:p-8 overflow-y-scroll gap-5">
                {message.text && (
                    <div className={`rounded-lg p-4 ${
                        message.type === "success" 
                            ? "bg-green-500/20 border border-green-500 text-green-200" 
                            : "bg-red-500/20 border border-red-500 text-red-200"
                    }`}>
                        {message.text}
                    </div>
                )}
                <div className="flex flex-col min-w-full max-w-4xl mx-auto w-full bg-[#2B313C] rounded-2xl shadow-2xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 w-full rounded-t-xl">
                        <h2 className="text-white text-3xl font-bold">Account Settings</h2>
                        <p className="text-red-100 text-sm mt-1">Manage your account information and preferences</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6 relative pb-15">
                        {/* User ID Section */}
                        <div className="bg-[#232933] rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
                            <label className="text-gray-400 text-sm font-medium uppercase tracking-wide">User ID</label>
                            <p className="text-white text-lg mt-2 font-mono">{user.id}</p>
                        </div>

                        {/* Username Section */}
                        <div className="bg-[#232933] rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
                            <label className="text-gray-400 text-sm font-medium uppercase tracking-wide">Username</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    className="flex-1 h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter username"
                                />
                                <button 
                                    onClick={handleSaveUsername}
                                    className="h-11 px-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    {loading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="bg-[#232933] rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
                            <label className="text-gray-400 text-sm font-medium uppercase tracking-wide">Email Address</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="flex-1 h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter email"
                                />
                                <button 
                                    onClick={handleSaveEmail}
                                    className="h-11 px-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Security Section */}
                        <div className="bg-[#232933] rounded-xl p-5 border border-gray-700 flex flex-col">
                            <label className="text-gray-400 text-sm font-medium uppercase tracking-wide">Security</label>
                            <button 
                                onClick={() => setShowPasswordModal(true)}
                                className="mt-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 w-50"
                            >
                                Change Password
                            </button>
                        </div>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-red-600 h-8 w-30 text-white font-medium rounded-lg absolute right-10 cursor-pointer">Signout</button>
                    </div>
                </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className="bg-[#2B313C] rounded-2xl shadow-2xl max-w-md w-full border border-gray-700 animate-scale-in">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl">
                            <h3 className="text-white text-2xl font-bold">Change Password</h3>
                            <p className="text-red-100 text-sm mt-1">Enter your current and new password</p>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-5">
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Current Password</label>
                                <input
                                    type="password"
                                    value={passwordForm.currentPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter current password"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">New Password</label>
                                <input
                                    type="password"
                                    value={passwordForm.newPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter new password"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Confirm New Password</label>
                                <input
                                    type="password"
                                    value={passwordForm.confirmPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Confirm new password"
                                />
                            </div>

                            {/* Modal Actions */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordModal(false)}
                                    className="flex-1 h-11 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all active:scale-95"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handlePasswordChange}
                                    disabled={loading}
                                    className="flex-1 h-11 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Updating..." : "Update Password"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-in {
                    from { 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
}

export default SettingsPage;