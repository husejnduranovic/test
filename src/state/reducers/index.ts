import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";

const Reducers = combineReducers({
    account: AccountReducer
})

export default Reducers;