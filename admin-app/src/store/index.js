// importing the creatStore module from redux
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers';
//creating the store


//importing the root reducer which will set the root state of the application
const store = createStore(rootReducer,applyMiddleware(thunk));


//exporting the store
export default store;

