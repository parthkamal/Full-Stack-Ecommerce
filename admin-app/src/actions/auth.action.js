import axios from "axios"
import { BASEURL } from "../urlConfig"
import { authConstants } from "./constants"


export const login = (user) => {
    console.log('auth.action.js')
    console.log(user)
    return async (dispatch) => {
	// if the action type is loginrequest then dispatch this action
    const res=await axios.post(BASEURL+`/signin`,{...user});
    console.log(res);
        dispatch({
            type: authConstants.LOGIN_REQUEST,...res
        })
    }
}
