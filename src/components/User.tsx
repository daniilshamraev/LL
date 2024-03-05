import {Link} from "react-router-dom";
import {
    useInitData
} from "@vkruglikov/react-telegram-web-app";


function User() {
    const [initDataUnsafe] = useInitData();

    return (
        <div className={'flex mb-1 mt-2 items-center'}>
            <b className={'mr-3'}>1</b>
            <div
                className="flex flex-col items-start ml-3 ">
                <p className={'text-2xl font-light'}>{initDataUnsafe?.user?.first_name + ' ' + initDataUnsafe?.user?.last_name}</p>
                <a href={"https://t.me/" + initDataUnsafe?.user?.username}
                   className={'text-blue-500'}>@{initDataUnsafe?.user?.username}</a>
            </div>
            <div className={'ml-auto'}>
                <Link to={"/inventory/2354365236"}>
                    <button
                        className={'p-2 bg-blue-500' +
                            ' text-wrap text-white' +
                            ' rounded-2xl font-bold' +
                            ' hover:outline-none' +
                            ' hover:bg-blue-600'}>8400 LC
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default User;