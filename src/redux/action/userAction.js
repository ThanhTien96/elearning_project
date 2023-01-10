
import userServices from "../../services/userSevice";
import userType from "../type/userType";

// user login fetch api action
export const fetchApiLoginAction = (data) => async (dispatch) => {
    try{
        const res = await userServices.fetchApiLogin(data);
        console.log(res.data.content);
        dispatch({
            type: userType.USER_LOGIN,
            payload: res.data.content,
        })

    } catch(err) {
        console.log(err);
    }
};