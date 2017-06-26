import initialState from '../helpers/initialState'


const gameReducer = (state = initialState(), action) => {
    switch(action.type) {
        case "NEW_GAME":
            return initialState();
        case "CHECK_ROW":
            if(state.activeRow === state.numOfTries || state.gameState === "win") {
                return state;
            }
            let tips = state.randomColors.map((color, i) => {
                if(state.guesses[state.activeRow][i] && state.guesses[state.activeRow][i].color === color) {
                    return 2;
                } else if (state.guesses[state.activeRow].reduce((a, b) => {return b.color === color ? !a : a}, false)) {
                    return 1;
                } else {
                    return 0;
                }
            }).sort().reverse().slice(0, 4),
                sumOfTips = tips.reduce((a, b) => a + b, 0);

            return {
                ...state,
                tips:[...state.tips, tips],
                activeRow: state.activeRow + 1,
                gameState: sumOfTips === 8 ? "win" : state.activeRow === state.numOfTries - 1 ? "loose" : "new"
            }
        case "CHANGE_INPUT_STATE":
            return {
                ...state,
                guesses: state.guesses.map((attr, i) => {
                    if (i === action.row && state.activeRow === i) {
                        switch(attr[action.pos].status) {
                            case "empty":
                                attr[action.pos].status = "clicked";
                                break;
                            case "clicked":
                                attr[action.pos].status = "filled";
                                break;
                            case "filled":
                                attr[action.pos].color = "white";
                                attr[action.pos].status = "clicked";
                                break;
                            default:
                                break;
                        }
                    }
                    return attr;
                })
            }
        case "CHANGE_COLOR":
            return {
                ...state,
                guesses: state.guesses.map((attr, i) => {
                    if (state.activeRow === i) {
                        return attr.map((item) => {
                            if(item.status === "clicked") {
                                item.color = action.color;
                                item.status = "filled";
                            }
                            return item;
                        });
                    }
                    return attr;
                })
            }
        default:
            return state;
    }
};

export default gameReducer;
