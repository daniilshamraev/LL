import {
    BackButton,
    useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useEffect} from "react";
import ItemList from "../components/ItemList.tsx";
import {useNavigate} from "react-router-dom";

function Marketplace() {
    const [impactOccurred] =
        useHapticFeedback();
    const navigate = useNavigate();

    useEffect(() => {
        impactOccurred('soft')
    }, [])
    return (
        <div>
            <BackButton
                onClick={() => {
                    impactOccurred('heavy')
                    navigate('/')
                }}/>
            <h1>Магазин</h1>
            <ItemList/>
        </div>
    );
}

export default Marketplace;