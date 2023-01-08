import { combineReducers } from "redux";
import chatMassage from './chatMsg'
const rootReducer = combineReducers(
    {
        chatMassage,
    }
);
export default rootReducer;