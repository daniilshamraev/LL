function User({
                  index,
                  first_name,
                  last_name,
                  username,
                  coin_balance,
                  inventory_link
              }) {

    return (
        <div className={'flex mb-1 mt-2 items-center'}>
            <b className={'mr-3'}>{index}</b>
            <div
                className="flex flex-col items-start ml-3 ">
                <p className={'text-2xl font-light'}>{first_name + ' ' + last_name}</p>
                <a href={"https://t.me/" + username}
                   className={'text-blue-500'}>@{username}</a>
            </div>
            <div className={'ml-auto'}>
                <a href={inventory_link}>
                    <button
                        disabled={true}
                        className={'p-2 bg-blue-500' +
                            ' text-wrap text-white' +
                            ' rounded-2xl font-bold' +
                            ' hover:outline-none' +
                            ' hover:bg-blue-600'}>{Number(coin_balance).toLocaleString(
                        "en",
                        {
                            unitDisplay: "short",
                            notation: "compact",
                        }
                    )} СCOIN
                    </button>
                </a>
            </div>
        </div>
    );
}

export default User;