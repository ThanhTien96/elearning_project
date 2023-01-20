
import requester from "./apiRequester"
import { apiPathAdminList } from '../utils/apiPath';
import { maNhom } from '../utils/index';

class AdminService{

    // lấy danh sách tài khoản người dùng
    getApiAccountList = (page = 1) => {
        return requester({
            url: apiPathAdminList.GET_API_ACCOUNT_LIST,
            method: 'GET',
            params: {
                MaNhom: maNhom,
                pageSize: 10,
                page: page,                
            },
        });
    };

    // lấy thông tin tài khoản
    getAccountProfile = (taiKhoan) => {
        requester({
            url: apiPathAdminList.GET_ACCOUNT_PROFILE,
            method: 'POST',
            params:{
                TaiKhoan: taiKhoan,
            },
        });
    };


    // them nguoi dung
    getApiCreateAccount = (formData) => {
        return requester({
            url: apiPathAdminList.ADD_ACCOUNT,
            method: 'POST',
            data: formData,
        });
    };

    // sua thong tin nguoi dung
    fetchApiEditAccount = (formData) => {
        return requester({
            url: apiPathAdminList.EDIT_ACCOUNT,
            method: 'PUT',
            data: formData,

        });
    };

    // xóa tài khoản nguoi dùng
    getApiDeleteAccount = (taiKhoan) => {
        return requester({
            url: apiPathAdminList.DELETE_ACCOUNT,
            method: 'DELETE',
            params:{
                TaiKhoan: taiKhoan,
            },
        });
    };
};

const adminService = new AdminService();

export default adminService;