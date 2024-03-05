import {
    BackButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Game from "../components/Game.tsx";

function Games() {
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
                }}
            />
            <h1>Игры</h1>
            <div className="flex flex-col pt-8">
                <Game/>
            </div>
        </div>
    );
}

export default Games;