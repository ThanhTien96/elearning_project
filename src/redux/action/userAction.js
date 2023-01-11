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

<<<<<<< HEAD
    } catch(err) {
        throw err;
=======
    } catch (err) {
        throw err
        console.log(err);
>>>>>>> 58d2b739157c6c796f1c6cc0a92f4f056aff25d0
    }
};

// dang ky tai khoan
export const fetchApiRegister = (data) => async (dispatch) => {

    try {
        const res = await userServices.fetchApiRegister(data);
        console.log(res.data.content);
        dispatch({
            type: userType.USER_REGISTER,
            payload: res.data.content,
        })
    } catch (err) {
        throw err;
    }

};