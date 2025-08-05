import signOutIcon from "../../../../../../assets/logout.png";

function FourthDiv(props) {
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.id;
    const username = user.username;
    const email = user.email;

    const sendData = () => {
        props.onSendData(true);
    }

    return(
        <>
            <div className="flex flex-col justify-between w-full h-full">
                <h1 className="text-white text-xl font-bold tracking-wide font-sans">Your Account</h1>
                <div className="flex flex-col w-full bg-[#232831]">
                    <div className="flex flex-col w-full p-2">
                        <p className="text-normal font-mono text-[#C0C0C0] bg-[#262C36]">UID</p>
                        <h3 className="text-lg text-white">{ uid }</h3>
                    </div>
                    <div className="flex flex-col w-full p-2">
                        <p className="text-normal font-mono text-[#C0C0C0] bg-[#262C36]">Username</p>
                        <h3 className="text-lg text-white">{ username }</h3>
                    </div>
                    <div className="flex flex-col w-full p-2">
                        <p className="text-normal font-mono text-[#C0C0C0] bg-[#262C36]">Email</p>
                        <h3 className="text-lg text-white">{ email }</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="flex items-center justify-center">
                        <button className="bg-transparent border-transparent text-[#C0C0C0] cursor-pointer hover:text-white">Manage your Account</button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                sendData();
                            }}
                            className="flex flex-row items-center justify-center w-full border-3 border-[#E14C4C] bg-[#E14C4C] text-white cursor-pointer gap-1 hover:bg-transparent transition-[.1s]"
                        >
                            <img src={ signOutIcon } className="invert-100 h-[15px]" />
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FourthDiv;