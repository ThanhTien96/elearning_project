import userServices from "../../services/userService";
import userType from "../type/userType";
import { createAction } from "./createAction";

// user login fetch api action
export const fetchApiLoginAction = (data) => async (dispatch) => {
    try {
        
        const res = await userServices.fetchApiLogin(data);
        console.log(res.data);
        dispatch(createAction(userType.USER_LOGIN, res.data));

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