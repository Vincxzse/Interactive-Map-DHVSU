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
            <div className="flex items-center justify-center z-1 w-full h-full fixed bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-3/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = { props.onSendData } />
                    <div className="flex flex-col items-start justify-center h-full w-full gap-5">
                        <p className="font-mono font-bold tracking-wider text-xl text-white">Are you sure you want to Sign-out?</p>
                        <div className="grid grid-cols-2 w-full h-[30%] gap-5">
                            <button
                                onClick={ handleSignout }
                                className="bg-green-400 border-3 border-green-400 text-white text-lg font-mono font-bold hover:bg-transparent transition-[0.1s] cursor-pointer rounded-xl"
                            >
                                Yes
                            </button>
                            <button
                                onClick={ sendData }
                                className="bg-red-500 border-3 border-red-500 text-white text-lg font-mono font-bold hover:bg-transparent transition-[0.1s] cursor-pointer rounded-xl"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogoutConfirm;