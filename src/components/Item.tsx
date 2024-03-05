import Verefy from "./Verefy.tsx";
import {
    useShowPopup
} from "@vkruglikov/react-telegram-web-app";

function Item() {
    const showPopup = useShowPopup();

    const handleClick = () =>
        showPopup({
            message: 'Скопировано!',
        });
    return (
        <div
            className={"flex m-4 flex-col p-3 bg-[color:var(--tg-theme-secondary-bg-color)] items-center rounded-2xl shadow"}>
            <span
                className={'cursor-pointer mb-4'}>#43553535</span>
            <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Compass.webp"
                alt="Compass" className={'mb-4'} width="140"
                height="140" decoding={"auto"}/>
            <h2 className={"text-3xl"}>Компас</h2>
            <div
                className="flex flex-col items-start text-xl max-w-xs">
                <span title={'In my inventory'}
                      className={'mt-4 font-medium' +
                          ' cursor-help'}>🎒В инвентаре: <b>0</b></span>
                <span title={'Price'}
                      className={'font-medium' +
                          ' cursor-help'}>🤑Цена: <b>800 TON 💎</b></span>
                <p className={'mt-4 text-xs'}>Позволяет
                    найти выход
                    из локации (можно
                    использовать 1 раз за прохождение
                    сюжета)</p>
                <div className="mt-5">
                    <span>Адрес контракта:
                        <code
                            onClick={handleClick}
                            className={'text-ellipsis text-[color:var(--tg-theme-destructive-text-color)] cursor-pointer'}> EQ...S6
                        </code>
                    </span>
                    <div className="">
                        <span
                            className={'flex' +
                                ' items-center'}>Коллекиця: <b
                            className={'ml-1' +
                                ' text-[color:var(--tg-theme-accent-text-color)]'}>CRYPTON</b><Verefy/></span>
                    </div>
                </div>
            </div>

            <div
                className="flex w-full text-white justify-evenly mt-4">
                <button
                    className={"bg-[color:var(--tg-theme-button-color)] text-[color:var(--tg-theme-button-text-color)] mt-2 w-full"}>Купить
                </button>
                {/*<button*/}
                {/*    disabled={true}*/}
                {/*    className={"bg-neutral-800" +*/}
                {/*        " text-[color:var(--tg-theme-button-text-color)] mt-2 w-full"}>Продать*/}
                {/*</button>*/}
            </div>
        </div>
    );
}

export default Item;