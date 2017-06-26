export const checkRow = (row) => {
    return {
        type: "CHECK_ROW",
        row
    };
};

export const changeInputState = (row, pos) => {
    return {
        type: "CHANGE_INPUT_STATE",
        row,
        pos
    };
};

export const changeColor = (color) => {
    return {
        type: "CHANGE_COLOR",
        color
    };
};

export const resetGame = () => {
    return {
        type: "NEW_GAME"
    };
};
