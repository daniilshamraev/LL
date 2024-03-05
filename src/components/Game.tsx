import {Disclosure} from "@headlessui/react";
import {FcLikePlaceholder} from "react-icons/fc";

function Game() {
    return (
        <Disclosure as="div">
            <Disclosure.Button>
                <div className={'mt-4' +
                    'w-full flex items-center'}>
                    <img
                        src="https://s00.yaplakal.com/pics/pics_original/3/5/8/9553853.jpg"
                        alt="Game icon"
                        className={'overflow-clip w-20' +
                            ' h-20 rounded-full'}/>
                    <div className="flex flex-col">
                        <span
                            className={'ml-4 text-2xl'}>Братья пилоты
                        </span>
                    </div>
                </div>
            </Disclosure.Button>

            <Disclosure.Panel as="div">
                <p>Мир сказочных историй, повествующих о
                    похождениях Шефа и Коллеги - двух
                    сыщиков, созданных известным советским и
                    российским детским писателем Эдуардом
                    Успенским. Шеф и Коллега - русские
                    частные сыщики. Шеф и Коллега являются
                    своеобразной пародией на Шерлока Холмса
                    и его коллегу Доктора Ватсона. </p>
                <div className="">
                    <ul>
                        <h2 className={'mt-6 text-xl' +
                            ' font-bold'}>Доступные
                            предметы:</h2>
                        <li className={'flex' +
                            ' items-center mt-4 mb-6' +
                            ' bg-[color:var(--tg-theme-secondary-bg-color)] rounded-xl p-2'}>
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Compass.webp"
                                alt="Compass"
                                className={''}
                                width="80"
                                height="80"
                                decoding={"auto"}/>
                            <div className="ml-2">
                                <h3 className={"text-xl"}>Компас</h3>
                                <p>Поможет мнгновенно найти
                                    выход из локации</p>
                            </div>

                        </li>
                    </ul>
                </div>
                <div
                    className="flex items-center justify-between mb-2">
                    <a href="https://t.me/youtbchnlbot?start=1">
                        <button
                            className={'mr-4 mt-2 bg-[color:var(--tg-theme-button-color)] text-[color:var(--tg-theme-button-text-color)]'}>Играть
                        </button>
                    </a>
                    <FcLikePlaceholder size={'2em'}/>
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}

export default Game;