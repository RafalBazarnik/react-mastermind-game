const createEmptyRow = () => {
    return [{status: "empty", color: "white"},
             {status: "empty", color: "white"},
             {status: "empty", color: "white"},
             {status: "empty", color: "white"}];
}


const createEmptyRows = () => {
    return [createEmptyRow(), createEmptyRow()];
}

export default createEmptyRows;
