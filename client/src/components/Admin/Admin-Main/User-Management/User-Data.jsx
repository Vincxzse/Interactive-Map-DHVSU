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
                <div className="flex flex-col w-full h-full min-h-[200px] items-center justify-center text-[#A0A7B4] px-4">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-base sm:text-lg font-semibold">No {props.title} found</p>
                    <p className="text-xs sm:text-sm mt-1 text-center">Try adjusting your search or filters</p>
                </div>
            ) : (
                <>
                    {/* Desktop View: Table Row */}
                    {props.categoryArray.map((user, index) => (
                        <div key={user.id || index}>
                            {/* Desktop Layout - Hidden on Mobile */}
                            <div className="hidden sm:grid grid-rows-1 grid-cols-6 w-full min-h-[60px] bg-transparent items-center px-4 gap-2 border-b border-[#3F464F] hover:bg-[#353B45] transition-colors">
                                <p className="col-span-2 font-normal text-sm lg:text-base text-white truncate" title={user.username}>
                                    {user.username}
                                </p>
                                <p className="col-span-2 font-normal text-sm lg:text-base text-white truncate" title={user.email}>
                                    {user.email}
                                </p>
                                <div className="col-span-1">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        user.role === 'super admin' 
                                            ? 'bg-purple-500/20 text-purple-300' 
                                            : user.role === 'admin'
                                            ? 'bg-blue-500/20 text-blue-300'
                                            : 'bg-green-500/20 text-green-300'
                                    }`}>
                                        {user.role}
                                    </span>
                                </div>
                                <div className="col-span-1 flex items-center justify-end">
                                    <button 
                                        className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[#4CA7E1]/20 transition-all active:scale-95"
                                        onClick={() => {
                                            sendData();
                                            sendUserInfo(user);
                                        }}
                                        aria-label="User actions"
                                    >
                                        <img 
                                            src={menuIcon} 
                                            className="h-5 w-5 invert opacity-70" 
                                            alt="Menu"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Layout - Card Style */}
                            <div className="sm:hidden w-full bg-[#353B45] rounded-lg p-4 mb-3 border border-[#3F464F]">
                                {/* Header Row */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold text-base truncate mb-1">
                                            {user.username}
                                        </h3>
                                        <p className="text-[#A0A7B4] text-sm truncate">
                                            {user.email}
                                        </p>
                                    </div>
                                    <button 
                                        className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-lg bg-[#2B313C] hover:bg-[#4CA7E1]/20 transition-all active:scale-95 ml-2 flex-shrink-0"
                                        onClick={() => {
                                            sendData();
                                            sendUserInfo(user);
                                        }}
                                        aria-label="User actions"
                                    >
                                        <img 
                                            src={menuIcon} 
                                            className="h-5 w-5 invert opacity-70" 
                                            alt="Menu"
                                        />
                                    </button>
                                </div>

                                {/* Role Badge */}
                                <div className="flex items-center gap-2">
                                    <span className="text-[#A0A7B4] text-xs font-medium">Role:</span>
                                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                                        user.role === 'super admin' 
                                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                                            : user.role === 'admin'
                                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                                    }`}>
                                        {user.role}
                                    </span>
                                </div>

                                {/* Optional: Additional Info */}
                                {user.id && (
                                    <div className="mt-2 pt-2 border-t border-[#3F464F]">
                                        <span className="text-[#A0A7B4] text-xs">ID: {user.id}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default UserData;