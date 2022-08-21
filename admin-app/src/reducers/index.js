// exporting the default state of the app from the reducer will act as root reducer
import authReducers from "./auth.reducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({auth:authReducers});

export default rootReducer;
