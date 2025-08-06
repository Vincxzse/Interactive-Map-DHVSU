import keyIcon from "../../../../assets/key.png";
import signOutIcon from "../../../../assets/logout.png";

function AccountManagement(props) {
    const user = JSON.parse(localStorage.getItem("user"));
    const uid = user.id;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    const roleSend = role === "super admin" ? " Super Admin" : role === "admin" ? " Admin" : null
    var itemColor = { color: role === "super admin" ? "#4C9AFF" : role === "admin" ? "#B388FF" : null };

    const sendDataSignOut = () => {
        props.onSendData(true);
    }
    
    const sendDataChangePassword = () => {
        props.onSendData2(true);
    }

    return (
        <>
            <div className="flex flex-col w-full h-full items-start justify-evenly gap-5">
                <div className="grid grid-cols-2 grid-rows-1 w-full items-end">
                    <h1 className="text-white text-start text-2xl font-sans font-bold tracking-wide">Your Account</h1>
                    <p 
                        className="text-end"
                        style={ itemColor }
                    >
                        <span className="text-white text-lg font-sans font-bold tracking-wide">Access Level: </span>
                        &bull;
                        { roleSend }
                    </p>
                </div>
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
                <div className="grid grid-cols-2 grid-rows-1 items-center justify-center w-full gap-5">
                    <button
                        onClick={ sendDataChangePassword }
                        className="flex flex-row gap-1 items-center justify-center w-full h-7 text-white border-3 border-[#4CA7E1] bg-[#4CA7E1] cursor-pointer hover:bg-transparent transition-[.1s]"
                    >
                        <img src={ keyIcon } className="invert-100 h-[15px]" />
                        Change Password
                    </button>
                    <button
                        onClick={ sendDataSignOut }
                        className="flex flex-row gap-1 items-center justify-center w-full h-7 text-white border-3 border-[#E14C4C] bg-[#E14C4C] cursor-pointer hover:bg-transparent transition-[.1s]"
                        >
                        <img src={ signOutIcon } className="invert-100 h-[15px]" />
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
}

export default AccountManagement;