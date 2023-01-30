import adminService from '../../../services/adminSevice';
import adminType from '../../type/adminType';
import { createAction } from '../createAction';





//lấy danh sách tài khoản người dùng AJAX
export const fetchApiAccountAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiAccountList(page);
            console.log(res.data)
            dispatch(createAction(adminType.GET_ACCOUNT_LIST, res.data));

        } catch (err) {
            console.log(err);
        }
    };
};

//lay thong tin tai khoan
export const fetApiProfileAction = async (dispatch) => {
    try {
        const res = await adminService.getAccountProfile();
        dispatch(createAction(adminType.GET_PROFILE, res.data));
    } catch (err) {
        console.log(err);
    }
}

// them nguoi dung
export const fetchApiCreateAccountAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiCreateAccount(taiKhoan);
            console.log(res.data);
            dispatch(createAction(adminType.CREATE_ACCOUNT, res.data));
        } catch (err) {
            console.log(err);
        }
    };
};


// sua thong tin nguoi dung
export const fetchApiAccountProfile = async (taiKhoan) => {
    
    return async (dispatch) => {
        try {
            
            const res = await adminService.fetchApiAccountProfile(taiKhoan);
            dispatch(createAction(adminType.EDIT_ACCOUNT, res.data));
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
}

// tìm kiếm người dùng
export const searchAccountApi = (tuKhoa) => {
    return async (dispatch) => {
        try{
            const res = await adminService.searchAccountPagination(tuKhoa);
            dispatch(createAction(adminType.FIND_ACCOUNT, res.data));
            console.log(res.data)
        }catch(err) {
            console.log(err);
        }
    }
}

// xóa tài khoản người dùng
export const fetchApiDeleteAccount = (taiKhoan) => {
    return async (dispatch) => {
        try {

            await adminService.getApiDeleteAccount(taiKhoan);
            
        } catch (err) {
            throw err;            
        }
    };
};