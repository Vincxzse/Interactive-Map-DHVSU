import CloseBtn from "../../../../../Close-Button";
import { useNavigate } from "react-router-dom";

function LogoutConfirm(props) {
    const sendData = () => {
        const data = false;
        props.onSendData(data);
    }
    
    const navigate = useNavigate();
    
    const handleSignout = () => {
        localStorage.clear();
        navigate("/", { replace: true });
    }
    
    return (
        <>
            {/* Backdrop */}
            <div className="flex items-center justify-center z-50 w-full h-full fixed inset-0 bg-black/80 backdrop-blur-sm p-4">
                {/* Modal Container */}
                <div className="relative flex flex-col items-center justify-between w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#2B313C] shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 min-h-[250px] sm:min-h-[280px] animate-scale-in">
                    {/* Close Button */}
                    <CloseBtn onSendData={props.onSendData} />
                    
                    {/* Content */}
                    <div className="flex flex-col items-center justify-center flex-1 w-full gap-6 sm:gap-8">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/20 border-2 border-red-500">
                            <svg 
                                className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                                />
                            </svg>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-white px-2">
                            Sign Out Confirmation
                        </h2>
                        
                        {/* Message */}
                        <p className="text-center text-sm sm:text-base text-[#A0A7B4] px-4">
                            Are you sure you want to sign out of your account?
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-3 sm:gap-4 mt-4">
                        {/* Cancel Button */}
                        <button
                            onClick={sendData}
                            className="order-2 sm:order-1 flex items-center justify-center px-6 py-3 sm:py-4 bg-transparent border-2 border-[#4CA7E1] text-[#4CA7E1] text-base sm:text-lg font-semibold hover:bg-[#4CA7E1] hover:text-white transition-all cursor-pointer rounded-xl active:scale-95"
                        >
                            Cancel
                        </button>
                        
                        {/* Confirm Button */}
                        <button
                            onClick={handleSignout}
                            className="order-1 sm:order-2 flex items-center justify-center px-6 py-3 sm:py-4 bg-red-500 border-2 border-red-500 text-white text-base sm:text-lg font-semibold hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer rounded-xl active:scale-95"
                        >
                            Yes, Sign Out
                        </button>
                    </div>
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

export default LogoutConfirm;