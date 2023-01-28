
import adminService from '../../../services/adminSevice';
import { createAction } from '../createAction';
import adminType from '../../type/adminType';

//lay danh sach khoa hoc
export const fetApiCourseAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await adminService.getApiCourseList(page);
            console.log(res.data);
            dispatch(createAction(adminType.GET_COURSE_LIST, res.data))
        } catch (err) {
            console.error(err);
        }

    }
}