import React from "react";

function UserData(props) {
    return (
        <>
            {props.categoryArray.length === 0 ? (
                <p>No { props.title } found.</p>
            ) : (
                props.categoryArray.map((user, index) => (
                    <div key={ user.id || index } className="grid grid-rows-1 grid-cols-6 w-full h-[10%] bg-transparent items-center px-2 gap-2 border-b-2 border-[#3F464F] flex-shrink-0">
                        <p className="col-span-2 font-normal text-lg text-[#fff]">{ user.username }</p>
                        <p className="col-span-2 font-normal text-lg text-[#fff]">{ user.email }</p>
                        <p className="col-span-1 font-normal text-lg text-[#fff]">{ user.role }</p>
                    </div>
                ))
            )
            }
        </>
    );
}

export default UserData;