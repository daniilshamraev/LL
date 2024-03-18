import User from "../components/User.tsx";
import {useEffect, useState} from "react";
import {
    BackButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {UserProps} from "../iterfaces/games.ts";

function UserList() {
    const navigate = useNavigate();
    const [impactOccurred,] =
        useHapticFeedback();
    // @ts-ignore
    const [users, setUsers] = useState<UserProps[]>()
    useEffect(() => {
        impactOccurred('light')
        let config = {
            method: 'get',
            mode: 'cors',
            maxBodyLength: Infinity,
            url: 'https://life-line-dev-16d8e83fea40.herokuapp.com/api/users/top10/',
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
                setUsers(() => {
                    return response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (
        <>
            <BackButton
                onClick={() => {
                    impactOccurred('heavy')
                    navigate('/')
                }}/>
            <h1>Топ игроков</h1>
            <div className={'mt-4 flex flex-col'}>
                {
                    users && (
                        <>
                            {
                                users.map((_user: UserProps, index: number) => (
                                    <User key={index}
                                          index={index + 1}
                                          username={_user.username}
                                          first_name={_user.first_name}
                                          coin_balance={_user.coin_balance}
                                          inventory_link={_user.inventory_link}
                                          last_name={_user.last_name}/>
                                ))
                            }
                        </>
                    )
                }
                {/*<button*/}
                {/*    className={'mt-3 mx-auto hover:border-none hover:bg-gray-300 dark:hover:bg-gray-950'}*/}
                {/*    onClick={() => {*/}
                {/*        setUsers(users + 1)*/}
                {/*    }}>Load more...*/}
                {/*</button>*/}
            </div>
        </>
    );
}

export default UserList;