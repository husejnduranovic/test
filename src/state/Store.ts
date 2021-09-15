import { applyMiddleware, createStore } from "redux";
import Reducers from "./reducers";
import thunk from "redux-thunk";

export const Store = createStore(
    Reducers,
    {},
    applyMiddleware(thunk)
)