import closeIcon from "../assets/close.png";

function CloseBtn(props) {
    const sendData = () => {
        const data = false;
        props.onSendData(data);
    }

    return(
        <button 
            className="h-[30px] w-auto invert-40 absolute top-3 right-3 cursor-pointer"
            onClick={ sendData }
        >
            <img src={ closeIcon } className="h-[30px] w-auto invert-40" />
        </button>
    );
}

export default CloseBtn;