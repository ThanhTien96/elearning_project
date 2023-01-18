import adminService from '../../../services/adminSevice';
import adminType from '../../type/adminType';
import { useState } from 'react';
import { createAction } from '../createAction';

const setUser = useState;

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

// them nguoi dung
export const fetchApiCreateAccountAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiCreateAccount(page);
            console.log(res.data);
            dispatch(createAction(adminType.CREATE_ACCOUNT));
        } catch (err) {
            console.log(err);
        }
    };
};


// sua thong tin nguoi dung
export const fetchApiAccountProfile = async (taiKhoan) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiEditAccount(taiKhoan);
            await setUser(res.data.content);
            dispatch(createAction(adminType.EDIT_ACCOUNT));
        } catch (err) {
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