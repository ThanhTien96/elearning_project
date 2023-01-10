import { apiPathUser } from "../utils/apiPath"
import requester from "./apiRequester"

class UserServices {
    fetchApiLogin = (data) => {
        return requester({
            url: apiPathUser.USER_LOGIN,
            method: 'POST',
            data: data
        });
    }
}

const userServices = new UserServices();

export default userServices;