
function PopupField(props) {
    return(
        <>
            <div className="flex flex-col w-full">
                <label className="text-[#A0A7B4]">{ props.label }</label>
                <div className='flex flex-col border-1 justify-center h-12 w-full py-3 px-4 border-transparent bg-[#1E232C] items-center rounded-md'>
                    <input type={ props.type } className='focus:outline-none w-full h-full text-lg text-white placeholder-[#A0A7B4]'  name={ props.name } onChange={ e => props.setValue(e.target.value) } value={ props.value } />
                </div>
            </div>
        </>
    );
}

export default PopupField;