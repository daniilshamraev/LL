import './App.scss'
import {
    PiBackpackLight,
    PiGameControllerThin
} from "react-icons/pi";
import {Link} from "react-router-dom";
import {CiUser} from "react-icons/ci";
import {SiMarketo} from "react-icons/si";
import {IoBookOutline, IoHelpSharp} from "react-icons/io5";
import {
    useHapticFeedback, useInitData
} from "@vkruglikov/react-telegram-web-app";
import {
    TonConnectButton,
    useTonAddress
} from "@tonconnect/ui-react";
import {useEffect} from "react";
import axios from "axios";


function App() {
    const [, initData] = useInitData();
    const userFriendlyAddress = useTonAddress();

    useEffect(() => {
        let config = {
            method: 'post',
            mode: 'cors',
            maxBodyLength: Infinity,
            url: 'https://life-line-dev-16d8e83fea40.herokuapp.com/api/user',
            crossOrigin: true,
            headers: {
                'Content-Type': 'application/json',
                'Host': 'life-line-dev-16d8e83fea40.herokuapp.com',
                'TelegramData': initData,
                'WalletAddress': userFriendlyAddress,
            }
        };

        axios.request(config)
            .then(() => {
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userFriendlyAddress]);

    const [, notificationOccurred] =
        useHapticFeedback();
    return (
        <>
            {
                !userFriendlyAddress && (
                    <div className={'w-full flex' +
                        ' flex-col items-center'}>
                        <h2 className={'text-3x font-extralight' +
                            ' w-full' +
                            ' text-center mb-4'}>Вам неообходимо
                            подключить кошелек</h2>
                        <TonConnectButton/>
                    </div>
                )
            }
            {
                userFriendlyAddress && (
                    <>
                        <div
                            className="flex flex-col w-full items-end">
                            <TonConnectButton/>
                        </div>

                        <h2 className={'mt-4 text-3x' +
                            ' font-extralight' +
                            ' w-full' +
                            ' text-center'}>Баланс
                        </h2>
                        <div className="w-full text-center">
                            <h1 className={'mt-4 text-5xl font-bold'}>8400,<span
                                className={'text-3xl ml-1 font-medium'}>45</span>
                                <code
                                    className={'ml-3 text-[color:var(--tg-theme-subtitle-text-color)]' +
                                        ' text-2xl'}>LCOIN</code>
                            </h1>
                        </div>


                        <div
                            className={'mt-8'}>
                        </div>
                        <div
                            className="my-4 text-xl flex flex-wrap w-full flex-col">
                            <div
                                className="flex w-full justify-evenly items-center">
                                <Link to={"/games"}>
                                    <button
                                        className={'text-[color:var(--tg-theme-text-color)] flex flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <PiGameControllerThin
                                            size={'2em'}/>
                                        Игры
                                    </button>
                                </Link>
                                <Link to={"/users"}>
                                    <button
                                        className={'text-[color:var(--tg-theme-text-color)] flex flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <CiUser size={'2em'}/>
                                        Топ
                                    </button>
                                </Link>
                            </div>
                            <div
                                className="flex w-full justify-evenly items-center">
                                <Link
                                    to={"/inventory/2354365236"}>
                                    <button
                                        className={'text-[color:var(--tg-theme-text-color)] flex flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <PiBackpackLight
                                            size={'2em'}/>
                                        Инвентарь
                                    </button>
                                </Link>
                                <Link to={"/help"}>
                                    <button
                                        className={'text-[color:var(--tg-theme-text-color)] flex' +
                                            ' flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <IoHelpSharp
                                            size={'2em'}/>
                                        Помощь
                                    </button>
                                </Link>
                            </div>
                            <div
                                className="flex w-full justify-evenly items-center">
                                <Link to={"/marketplace"}>
                                    <button
                                        className={'text-[color:var(--tg-theme-text-color)] flex' +
                                            ' flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <SiMarketo
                                            size={'2em'}/>
                                        Магазин
                                    </button>
                                </Link>
                                <Link to={"/"}>
                                    <button
                                        onClick={() => {
                                            notificationOccurred('error')
                                        }}
                                        className={'text-[color:var(--tg-theme-text-color)] flex' +
                                            ' flex-col' +
                                            ' items-center' +
                                            ' bg-inherit ' +
                                            'text-wrap ' +
                                            'rounded-2xl font-bold ' +
                                            'hover:outline-none '}>
                                        <IoBookOutline
                                            size={'2em'}/>
                                        Авторство
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div
                            className=" flex flex-col bg-[color:var(--tg-theme-secondary-bg-color)] w-full p-4 rounded-2xl mt-2">
                            <p>История прохождений:</p>
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Zzz.webp"
                                alt="Zzz" width="180px"
                                height="180px"
                                className={'mt-3 mx-auto p-8'}
                                onClick={() => notificationOccurred('error')}/>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default App