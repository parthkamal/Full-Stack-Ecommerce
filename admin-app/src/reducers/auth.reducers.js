import { authConstants } from "../actions/constants";


//defining the initial state of the user
const initialState={
	token:null,
	user: {
		firstName:'',
		lastName:'',
		email:'',
		picture:''
	},
	authenticate:false,
	authenticating:false
	//the authenticate is set to be false by default
}

export default (state=initialState,action)=>{
	console.log("reducer is fired")
    const {actionData}=action
    console.log(action)
    const {data}=action;
	switch(action.type){
		case authConstants.LOGIN_REQUEST:

			state ={
				...state,authenticate:true,authenticating:true,
			}
            state.user ={
                ...state.user,...data
            }
			//using the literal operater to update the state of the user 
			break;
	}
	return state;
}
