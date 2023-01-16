import adminService from "../../../services/adminSevice";
import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    accountList: null,
}



const accountManagerSlice = createSlice({
    name: 'accountManagerSlice',
    initialState,
    reducers: {
      //lấy danh sách tài khoản người dùng
      getApiAccountAction: (state, action) => {
        state.accountList = action.payload;
      },
    }
});

export const {
    getApiAccountAction,
} = accountManagerSlice.actions

export default accountManagerSlice.reducer

//lấy danh sách tài khoản người dùng AJAX
export const getApiAccount = (page, tuKhoa) => {
    return async (dispatch, setState) => {
        try{
            const res = await adminService.getAccountList(page, tuKhoa);
            dispatch(getApiAccountAction(res.data.content));

        } catch (err) {
            console.log(err);
        }
    };
};

