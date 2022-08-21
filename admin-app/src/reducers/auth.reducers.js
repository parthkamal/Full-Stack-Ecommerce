import { authConstants } from "../actions/constants";


//defining the initial state of the user
const initialState={
    name:"parthkamal"
}

export default (state=initialState,action)=>{
    console.log("reducer is fired")
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state ={
                ...state,...action.payload
            }
            break;
    }
    return state;
}