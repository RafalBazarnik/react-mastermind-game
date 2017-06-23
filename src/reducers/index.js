import { combineReducers } from "redux";
import gameReducer from "./game";

const todoReducers = combineReducers({
    game: gameReducer
});

export default todoReducers;
