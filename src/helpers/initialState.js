import createEmptyRows from './createEmptyRows'
import shuffleArray from './shuffleArray'
import { colorArray } from '../enums/colors'


const initialState = () => {
    const tries = 6;
    return {
        gameState: "new",
        activeRow: 0,
        guesses: createEmptyRows(tries),
        tips: [],
        numOfTries: tries,
        randomColors: shuffleArray(colorArray.slice(0)).slice(0, 4)
    }
}

export default initialState;
