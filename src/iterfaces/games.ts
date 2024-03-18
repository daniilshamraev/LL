export interface GameProps {
    id: number,
    name: string,
    description: string,
    image: string,
    author: { // автор игры
        firstname: string; // имя автора
        lastname: string; // фамилия автора
    },
    game: GameProps
}

export interface UserProps {
    first_name: string
    last_name: string
    username: string
    coin_balance: string
    inventory_link: string
}

export default GameProps