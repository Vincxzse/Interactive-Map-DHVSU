import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    const [step, setStep] = useState(1); // 1: email, 2: code, 3: new password
    const [email, setEmail] = useState("");
    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
    const [loading, setLoading] = useState(false);

    const handleSendCode = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setMessage({ text: "Please enter your email", type: "error" });
            return;
        }
        
        try {
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setMessage({ text: "Reset code sent! Check your email.", type: "success" });
                setStep(2);
            } else {
                setMessage({ text: data.message, type: "error" });
            }
        } catch (err) {
            console.error(err);
            setMessage({ text: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        
        if (!resetCode || resetCode.length !== 6) {
            setMessage({ text: "Please enter the 6-digit reset code", type: "error" });
            return;
        }
        
        try {
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/verify-reset-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, token: resetCode })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setMessage({ text: "Code verified! Enter your new password.", type: "success" });
                setStep(3);
            } else {
                setMessage({ text: data.message, type: "error" });
            }
        } catch (err) {
            console.error(err);
            setMessage({ text: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        if (!newPassword || !confirmPassword) {
            setMessage({ text: "Please fill in all fields", type: "error" });
            return;
        }
        
        if (newPassword !== confirmPassword) {
            setMessage({ text: "Passwords do not match", type: "error" });
            return;
        }
        
        if (newPassword.length < 8) {
            setMessage({ text: "Password must be at least 8 characters", type: "error" });
            return;
        }
        
        try {
            setLoading(true);
            setMessage({ text: "", type: "" });
            
            const response = await fetch(`${BACKEND_URL}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, token: resetCode, newPassword })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setMessage({ text: "Password reset successful! Redirecting to login...", type: "success" });
                setTimeout(() => navigate('/'), 2000);
            } else {
                setMessage({ text: data.message, type: "error" });
            }
        } catch (err) {
            console.error(err);
            setMessage({ text: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1f28] to-[#252b38] p-4">
            <div className="w-full max-w-md bg-[#2B313C] rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                    <h2 className="text-white text-2xl font-bold">Reset Password</h2>
                    <p className="text-red-100 text-sm mt-1">
                        {step === 1 && "Enter your email to receive a reset code"}
                        {step === 2 && "Enter the 6-digit code sent to your email"}
                        {step === 3 && "Create your new password"}
                    </p>
                </div>

                <div className="p-6">
                    {/* Message */}
                    {message.text && (
                        <div className={`rounded-lg p-3 mb-4 text-sm ${
                            message.type === "success" 
                                ? "bg-green-500/20 border border-green-500 text-green-200" 
                                : "bg-red-500/20 border border-red-500 text-red-200"
                        }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Step 1: Email */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendCode(e)}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                onClick={handleSendCode}
                                disabled={loading}
                                className="w-full h-11 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Reset Code"}
                            </button>
                        </div>
                    )}

                    {/* Step 2: Code */}
                    {step === 2 && (
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Reset Code</label>
                                <input
                                    type="text"
                                    value={resetCode}
                                    onChange={(e) => setResetCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    onKeyPress={(e) => e.key === 'Enter' && handleVerifyCode(e)}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all text-center text-2xl tracking-widest"
                                    placeholder="000000"
                                    maxLength="6"
                                />
                                <p className="text-gray-500 text-xs mt-2 text-center">Check your email for the 6-digit code</p>
                            </div>
                            <button
                                onClick={handleVerifyCode}
                                disabled={loading || resetCode.length !== 6}
                                className="w-full h-11 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Verifying..." : "Verify Code"}
                            </button>
                            <button
                                onClick={() => setStep(1)}
                                className="w-full text-blue-400 hover:text-blue-300 text-sm"
                            >
                                Resend code
                            </button>
                        </div>
                    )}

                    {/* Step 3: New Password */}
                    {step === 3 && (
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">New Password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Enter new password"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-sm font-medium block mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleResetPassword(e)}
                                    className="w-full h-11 rounded-lg bg-[#1a1f28] px-4 text-white border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                                    placeholder="Confirm new password"
                                />
                            </div>
                            <button
                                onClick={handleResetPassword}
                                disabled={loading}
                                className="w-full h-11 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </div>
                    )}

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                            ← Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;