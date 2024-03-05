import {
    BackButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Help() {
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
            <h1>Помощь:</h1>
            <p>
                какой-то текст
                <a> ссылка на что-то</a>
            </p>
        </div>
    );
}

export default Help;