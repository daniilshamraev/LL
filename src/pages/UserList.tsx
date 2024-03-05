import User from "../components/User.tsx";
import {useEffect, useState} from "react";
import {
    BackButton, useHapticFeedback
} from "@vkruglikov/react-telegram-web-app";
import {useNavigate} from "react-router-dom";

function list(numrows: number) {
    let result = []
    for (let i = 0; i < numrows; i++) {
        result.push(
            <div
                className={'border-b pb-1 dark:border-gray-950'}
                key={i}>
                <User/>
            </div>
        )

    }
    return (
        <>
            {result}
        </>
    )
}

function UserList() {
    const navigate = useNavigate();
    const [impactOccurred,] =
        useHapticFeedback();
    // @ts-ignore
    const [users, setUsers] = useState(1)
    useEffect(() => {
        impactOccurred('light')
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
                {list(users)}
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