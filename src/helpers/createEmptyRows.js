const createEmptyRow = () => {
    return [{status: "empty", color: "white"},
             {status: "empty", color: "white"},
             {status: "empty", color: "white"},
             {status: "empty", color: "white"}];
}


const createEmptyRows = (times) => {
    let array = [];
    for (var i = 0; i < times; i++) {
        array = array.concat([createEmptyRow()]);
    }
    return array;
}

export default createEmptyRows;
