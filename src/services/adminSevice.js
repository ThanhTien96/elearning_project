import requester from "./apiRequester"
import {
    apiPathAdminList, apiPathCourseManagerList
} from '../utils/apiPath';
import {
    maNhom
} from '../utils/index';

class AdminService {

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
            params: {
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

    //tìm kiếm người dùng phân trang
    searchAccountPagination = (tuKhoa) => {
        return requester({
            url: apiPathAdminList.SEARCH_ACCOUNT_PAGINATION,
            method: 'GET',
            params: {
                MaNhom: maNhom,
                tuKhoa: tuKhoa,
            }
        })
    };

    // xóa tài khoản nguoi dùng
    getApiDeleteAccount = (taiKhoan) => {
        return requester({
            url: apiPathAdminList.DELETE_ACCOUNT,
            method: 'DELETE',
            params: {
                TaiKhoan: taiKhoan,
            },
        });
    };

    // xóa khóa học
    getApiDeleteCourse = (MaKhoaHoc) => (
        requester({
            url: apiPathCourseManagerList.DELETE_COURSE,
            method: 'DELETE',
            params: {
                MaKhoaHoc: MaKhoaHoc
            },
        })
    );


};

const adminService = new AdminService();

export default adminService;