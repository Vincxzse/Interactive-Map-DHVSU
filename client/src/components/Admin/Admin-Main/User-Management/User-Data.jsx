import menuIcon from '../../../../assets/menu.png';

function UserData(props) {
    const sendData = () => {
        const data = true;
        props.onSendData(data);
    }

    const sendUserInfo = (user) => {
        props.userInfo(user);
    }

    return (
        <>
            {props.categoryArray.length === 0 ? (
                <p className="flex flex-col w-full h-[10%] flex-shrink-0 items-center justify-center text-white">No { props.title } found.</p>
            ) : (
                props.categoryArray.map((user, index) => (
                    <div key={ user.id || index } className="grid grid-rows-1 grid-cols-6 w-full h-[10%] bg-transparent items-center px-2 gap-2 border-b-2 border-[#3F464F] flex-shrink-0">
                        <p className="col-span-2 font-normal text-lg text-[#fff]">{ user.username }</p>
                        <p className="col-span-2 font-normal text-lg text-[#fff]">{ user.email }</p>
                        <p className="col-span-1 font-normal text-lg text-[#fff]">{ user.role }</p>
                        <div className="col-span-1 flex flex-row items-center justify-end">
                            <button 
                                className="cursor-pointer h-[30px] w-[30px]"
                                onClick = {() => {
                                    sendData();
                                    sendUserInfo(user);
                                }}
                            >
                                <img src={ menuIcon } className="h-[30px] w-[30px] invert-50" />
                            </button>
                        </div>
                    </div>
                ))
            )
            }
        </>
    );
}

export default UserData;