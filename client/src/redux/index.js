import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);
 export const store = createStore(rootReducer, composedEnhancer);
