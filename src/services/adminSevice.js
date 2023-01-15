
import requester from "./apiRequester"
import { apiPathAdminList } from '../utils/apiPath';
import { maNhom } from '../utils/truncateText';

class AdminService{

    getAccountList = (page = 1) => {
        return requester({
            url: apiPathAdminList.GET_API_ACCOUNT_LIST,
            method: 'GET',
            params: {
                MaNhom: maNhom,
                soPhanTuTrenTrang: 10,
                soTrang: page,
                
            },
        });
    };


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