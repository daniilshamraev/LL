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

export default GameProps