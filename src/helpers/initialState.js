import createEmptyRows from './createEmptyRows'
import shuffleArray from './shuffleArray'
import { colorArray } from '../enums/colors'


const initialState = () => {
    return {
        gameState: "new",
        activeRow: 0,
        guesses: createEmptyRows(),
        tips: [],
        numOfTries: 3,
        randomColors: shuffleArray(colorArray.slice(0))
    }
}

export default initialState;
