import React from "react";
import deleteIcon from '../../../../assets/delete.png';
import editIcon from '../../../../assets/edit.png';

function TableData(props) {
    return(
        <>
            {

                props.catArray.length === 0 ? (
                    <p>No {props.title} found.</p>
                    ) : (
                    props.catArray.map((user, index) => (
                        <div key={index} className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-3 w-full h-10 even:bg-[rgba(239,68,68,0.3)] odd:bg-[rgba(234,179,8,0.3)]">
                            <p className="flex items-center justify-center w-full h-full text-md tracking-wider font-mono font-normal">{user.username}</p>
                            <p className="flex items-center justify-center w-full h-full text-md tracking-wider font-mono font-normal">{user.email}</p>
                            <p className="flex items-center justify-center w-full h-full text-md tracking-wider font-mono font-normal">{user.role}</p>
                            <div className="grid grid-cols-2 items-center justify-center w-full h-full text-md tracking-wider font-mono font-normal gap-4">
                                <div className="flex w-full h-full items-center justify-end">
                                    <button className="flex flex-row items-center justify-center gap-1 w-[50%] border-2 border-blue-500 rounded-full text-blue-500 cursor-pointer">
                                        <img src={editIcon} className="h-4 w-auto" />
                                        Edit
                                    </button>
                                </div>
                                <div className="flex w-full h-full items-center justify-start">
                                    <button className="flex flex-row items-center justify-center gap-1 w-[50%] border-2 border-red-500 rounded-full text-red-500 cursor-pointer">
                                        <img src={deleteIcon} className="h-4 w-auto" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    );
}

export default TableData;