import { useNavigate } from "react-router-dom";
import signOutIcon from "../../../../../../assets/logout.png";

function FourthDiv(props) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.id;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    const roleSend = role === "super admin" ? "Super Admin" : role === "admin" ? "Admin" : "User";
    const roleColor = role === "super admin" ? "#4C9AFF" : role === "admin" ? "#B388FF" : "#5EEAD4";
    
    const sendData = () => {
        props.onSendData(true);
    }
    
    const manageAccount = () => {
        navigate("/admin/user-management");
    }
    
    return (
        <>
            <div className="flex flex-col justify-between w-full h-full gap-4">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                        Your Account
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-white text-sm sm:text-base font-semibold">Access Level:</span>
                        <span 
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                            style={{ 
                                backgroundColor: `${roleColor}20`,
                                color: roleColor,
                                border: `1px solid ${roleColor}40`
                            }}
                        >
                            <span style={{ fontSize: '1.2em' }}>•</span>
                            {roleSend}
                        </span>
                    </div>
                </div>
                
                {/* Account Info Section */}
                <div className="flex flex-col w-full bg-[#232831] rounded-lg overflow-hidden flex-1">
                    {/* UID */}
                    <div className="flex flex-col w-full p-3 sm:p-4 border-b border-[#3F464F]">
                        <p className="text-xs sm:text-sm font-mono text-[#A0A7B4] mb-1 uppercase tracking-wider">
                            User ID
                        </p>
                        <h3 className="text-base sm:text-lg text-white font-medium break-all">
                            {uid}
                        </h3>
                    </div>
                    
                    {/* Username */}
                    <div className="flex flex-col w-full p-3 sm:p-4 border-b border-[#3F464F]">
                        <p className="text-xs sm:text-sm font-mono text-[#A0A7B4] mb-1 uppercase tracking-wider">
                            Username
                        </p>
                        <h3 className="text-base sm:text-lg text-white font-medium break-all">
                            {username}
                        </h3>
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col w-full p-3 sm:p-4">
                        <p className="text-xs sm:text-sm font-mono text-[#A0A7B4] mb-1 uppercase tracking-wider">
                            Email Address
                        </p>
                        <h3 className="text-base sm:text-lg text-white font-medium break-all">
                            {email}
                        </h3>
                    </div>
                </div>
                
                {/* Action Buttons Section */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                    {/* Manage Account Button */}
                    <button
                        onClick={manageAccount}
                        className="flex items-center justify-center px-4 py-3 bg-transparent border-2 border-[#4CA7E1] text-[#4CA7E1] rounded-lg font-semibold text-sm sm:text-base cursor-pointer hover:bg-[#4CA7E1] hover:text-white transition-all active:scale-95"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="hidden sm:inline">Manage Account</span>
                        <span className="sm:hidden">Manage</span>
                    </button>
                    
                    {/* Sign Out Button */}
                    <button
                        onClick={sendData}
                        className="flex items-center justify-center px-4 py-3 bg-[#E14C4C] text-white rounded-lg font-semibold text-sm sm:text-base cursor-pointer hover:bg-[#C43434] transition-all active:scale-95 gap-2"
                    >
                        <img 
                            src={signOutIcon} 
                            className="invert w-4 h-4 sm:w-5 sm:h-5" 
                            alt="Sign out"
                        />
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}

export default FourthDiv;