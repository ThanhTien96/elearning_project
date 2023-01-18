import userServices from "../../services/userService";
import statusCode from "../../utils/statusCode";
import userType from "../type/userType";
import { createAction } from "./createAction";

// user login fetch api action
export const fetchApiLoginAction = (data) => async (dispatch) => {
    try {
        
        const res = await userServices.fetchApiLogin(data);
        
        if(res.status === statusCode.SUCCESS) {
            localStorage.setItem('Token', res.data.accessToken);
            dispatch(fetApiProfileAction);
        }
        
    } catch (err) {
        throw err;
    }
};

// action dang ky tai khoan
export const fetchApiRegister = (data) => async (dispatch) => {

    try {
        const res = await userServices.fetchApiRegister(data);
        dispatch(createAction(userType.USER_REGISTER, res.data))
    } catch (err) {
        throw err;
    }

};

// action lay thong tin tai khoan
export const fetApiProfileAction = async (dispatch) => {
    try {
        const res = await userServices.fetchApiProfile();
        dispatch(createAction(userType.GET_PROFILE, res.data));
    } catch (err) {
        console.log(err);
    }
}

