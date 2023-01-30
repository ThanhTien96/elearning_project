
import adminService from '../../../services/adminSevice';
import { createAction } from '../createAction';
import adminType from '../../type/adminType';
import coursesService from '../../../services/courseService';

//lay danh sach khoa hoc
export const fetApiCourseAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await coursesService.fetchApiPopularCourses(page);
            console.log(res.data);
            dispatch(createAction(adminType.GET_COURSE_LIST, res.data))
        } catch (err) {
            console.error(err);
        }

    }
}