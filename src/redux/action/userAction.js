import userServices from "../../services/userSevice";
import userType from "../type/userType";

// user login fetch api action
export const fetchApiLoginAction = (data) => async (dispatch) => {
    try {
        
        const res = await userServices.fetchApiLogin(data);
        console.log(res.data);
        dispatch({
            type: userType.USER_LOGIN,
            payload: res.data,
        })

    } catch (err) {
        throw err;
    }
};

// dang ky tai khoan
export const fetchApiRegister = (data) => async (dispatch) => {

    try {
        const res = await userServices.fetchApiRegister(data);
        dispatch({
            type: userType.USER_REGISTER,
            payload: res.data,
        })
    } catch (err) {
        throw err;
    }

};