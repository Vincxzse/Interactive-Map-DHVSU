import { useState } from "react";
import closeIcon from "../../../../assets/close.png";
import CloseBtn from "../../../Close-Button";
import PopupField from "./Popup-Field";

function EditDelete(props) {
    const [role, setRole] = useState(props.user.role);

    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(category);
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen fixed z-1 bg-[rgba(0,0,0,0.8)]">
                <div className="relative flex flex-col items-center justify-center w-3/12 h-8/12 bg-[#2B313C] shadow-2xl rounded-2xl p-10">
                    <CloseBtn onSendData = { props.onSendData } />
                    <form className="flex flex-col w-full h-full gap-2">
                        <h2 className="text-2xl text-white font-sans font-bold tracking-wider mb-2">Edit / Delete User</h2>
                        <PopupField 
                            label='Username'
                            type='text'
                            name='username'
                            value={ props.user.username }
                        />
                        <PopupField 
                            label='Email'
                            type='email'
                            name='email'
                            value={ props.user.email }
                        />
                        <select
                            id="role"
                            value={ role }
                            onChange={ handleChange }
                            className="flex items-center justify-center w-full h-auto text-start text-white cursor-pointer bg-[#353B45] focus:outline-0"
                        >
                            <option value="All Users">All Users</option>
                            <option value="Customers">Customers</option>
                            <option value="Admins">Admins</option>
                            <option value="Super Admins">Super Admins</option>
                        </select>
                    </form>
                    { console.log("UserID: ", props.user) }
                </div>
            </div>
        </>
    );
}

export default EditDelete;