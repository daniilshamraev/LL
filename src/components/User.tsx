import {Link} from "react-router-dom";


function User({
                  first_name,
                  last_name,
                  username,
                  coin_balance
              }) {

    return (
        <div className={'flex mb-1 mt-2 items-center'}>
            <b className={'mr-3'}>1</b>
            <div
                className="flex flex-col items-start ml-3 ">
                <p className={'text-2xl font-light'}>{first_name + ' ' + last_name}</p>
                <a href={"https://t.me/" + username}
                   className={'text-blue-500'}>@{username}</a>
            </div>
            <div className={'ml-auto'}>
                <Link to={"/inventory/2354365236"}>
                    <button
                        className={'p-2 bg-blue-500' +
                            ' text-wrap text-white' +
                            ' rounded-2xl font-bold' +
                            ' hover:outline-none' +
                            ' hover:bg-blue-600'}>{Number(coin_balance).toLocaleString(
                        "ru-RU",
                        {
                            style: "currency",
                            unit: "liter",
                            unitDisplay: "short",
                            notation: "compact",
                            currency: "СCOIN",
                        }
                    )}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default User;