import ItemList from "../components/ItemList.tsx";
import {
    BackButton, MainButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function UserInventory() {
    const [impactOccurred,] =
        useHapticFeedback();
    const navigate = useNavigate();

    useEffect(() => {
        impactOccurred('light')
    }, [])

    return (
        <div>
            <BackButton
                onClick={
                    () => {
                        impactOccurred('heavy')
                        navigate('/')
                    }
                }/>
            <MainButton
                text="Перейти в магазин"
                onClick={() => navigate('/marketplace')}
            />
            <h1>Инвентарь</h1>
            <ItemList/>
        </div>
    );
}

export default UserInventory;