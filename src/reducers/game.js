import initialState from '../helpers/initialState'


const gameReducer = (state = initialState(), action) => {
    console.log(action);
    switch(action.type) {
        case "NEW_GAME":
            return initialState();
        case "CHECK_ROW":
            let tips = state.guesses[state.activeRow].map((circle, i) => {
                if(circle.color === state.randomColors[i]) {
                    return 2;
                } else if (state.randomColors.indexOf(circle.color) >= 0) {
                    return 1;
                } else {
                    return 0;
                }
            }).sort().reverse();

            return {
                ...state,
                tips:[...state.tips, tips],
                activeRow: state.activeRow + 1
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
