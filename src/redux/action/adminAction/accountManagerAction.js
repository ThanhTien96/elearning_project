import adminService from '../../../services/adminSevice';
import adminType from '../../type/adminType';
import { createAction } from '../createAction';



//lấy danh sách tài khoản người dùng AJAX
export const fetchApiAccountAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiAccountList(page);
            console.log(res.data)
            dispatch(createAction(adminType.GET_ACCOUNT_LIST,res.data));

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
        }catch(err){
            console.log(err);
        }
    };
};


