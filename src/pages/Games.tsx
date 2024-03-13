import {
    BackButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Game from "../components/Game.tsx";
import axios from "axios";
import GameProps from "../iterfaces/games.ts";

function Games() {
    const [impactOccurred] =
        useHapticFeedback();
    const navigate = useNavigate();

    const [games, setGames] = useState<GameProps[]>()

    useEffect(() => {
        impactOccurred('soft')
        let config = {
            method: 'get',
            mode: 'cors',
            maxBodyLength: Infinity,
            url: 'https://life-line-dev-16d8e83fea40.herokuapp.com/api/games',
            crossOrigin: true,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Origin': 'https://ll-8i6.pages.dev',
                'Referer': 'https://ll-8i6.pages.dev/',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'Content-Type': 'application/json'
            }
        };

        axios.request(config)
            .then((response) => {
                setGames(() => {
                    return response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
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
                {
                    !games && (
                        <>
                            <div
                                className="shadow rounded-md p-4 mb-2 max-w-sm w-full mx-auto">
                                <div
                                    className="animate-pulse flex space-x-4">
                                    <div
                                        className="rounded-full bg-slate-700 h-20 w-20"></div>
                                    <div
                                        className="flex-1 space-y-6 py-1">
                                        <div
                                            className="h-2 bg-slate-700 rounded"></div>
                                        <div
                                            className="space-y-3">
                                            <div
                                                className="grid grid-cols-3 gap-4">
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div
                                                className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="shadow rounded-md p-4 mb-2 max-w-sm w-full mx-auto">
                                <div
                                    className="animate-pulse flex space-x-4">
                                    <div
                                        className="rounded-full bg-slate-700 h-20 w-20"></div>
                                    <div
                                        className="flex-1 space-y-6 py-1">
                                        <div
                                            className="h-2 bg-slate-700 rounded"></div>
                                        <div
                                            className="space-y-3">
                                            <div
                                                className="grid grid-cols-3 gap-4">
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div
                                                className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="shadow rounded-md p-4 mb-2 max-w-sm w-full mx-auto">
                                <div
                                    className="animate-pulse flex space-x-4">
                                    <div
                                        className="rounded-full bg-slate-700 h-20 w-20"></div>
                                    <div
                                        className="flex-1 space-y-6 py-1">
                                        <div
                                            className="h-2 bg-slate-700 rounded"></div>
                                        <div
                                            className="space-y-3">
                                            <div
                                                className="grid grid-cols-3 gap-4">
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div
                                                className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="shadow rounded-md p-4 mb-2 max-w-sm w-full mx-auto">
                                <div
                                    className="animate-pulse flex space-x-4">
                                    <div
                                        className="rounded-full bg-slate-700 h-20 w-20"></div>
                                    <div
                                        className="flex-1 space-y-6 py-1">
                                        <div
                                            className="h-2 bg-slate-700 rounded"></div>
                                        <div
                                            className="space-y-3">
                                            <div
                                                className="grid grid-cols-3 gap-4">
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div
                                                className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="shadow rounded-md p-4 mb-2 max-w-sm w-full mx-auto">
                                <div
                                    className="animate-pulse flex space-x-4">
                                    <div
                                        className="rounded-full bg-slate-700 h-20 w-20"></div>
                                    <div
                                        className="flex-1 space-y-6 py-1">
                                        <div
                                            className="h-2 bg-slate-700 rounded"></div>
                                        <div
                                            className="space-y-3">
                                            <div
                                                className="grid grid-cols-3 gap-4">
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div
                                                    className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div
                                                className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    games && (
                        <>
                            {
                                games.map((_game: GameProps) => (
                                    <Game key={_game.id}
                                          description={_game.description}
                                          id={_game.id}
                                          image={_game.image}
                                          name={_game.name}/>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Games;