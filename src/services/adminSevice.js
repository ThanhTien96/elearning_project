
import requester from "./apiRequester"
import { apiPathAdminList } from '../utils/apiPath';


class AdminService{
    
    // them nguoi dung
    addAccount = (formData) => {
        return requester({
            url: apiPathAdminList.ADD_ACCOUNT,
            method: 'POST',
            data: formData,
        });
    };
}

const adminService = new AdminService();
export default adminService;