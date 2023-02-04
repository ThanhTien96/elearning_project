
import { createAction } from '../createAction';
import adminType from '../../type/adminType';
import courseService from '../../../services/courseService';
import { isLoadingAction } from '../userAction';
import adminService from '../../../services/adminSevice';

//lay danh sach khoa hoc
export const fetApiCourseAction = (page) => {
    return async (dispatch) => {
        try {

            dispatch(isLoadingAction(true));

            const res = await courseService.fetchApiPopularCourses(page);

            dispatch(createAction(adminType.GET_COURSE_LIST, res.data));

        } catch (err) {

            console.error(err);

        } finally {

            dispatch(isLoadingAction(false));

        }

    }
}

//them khoa hoc
export const fetchApiCreateCourseAction = (formData) => {
    return async (dispatch) => {
        try {

            await courseService.fetApiCreateCourse(formData);


        }catch(err){

            throw err

        }
    }
};

// lấy danh sách học viên khóa học
export const fetchApiCourseStudentAction = (maKH) => async(dispatch) => {
    try {

        console.log(maKH)
        const res = await adminService.fetchApiCourseStudent(maKH);
        console.log(res.data);

        dispatch(createAction(adminType.GET_COURSE_STUDENT, res.data));

    } catch (err) {
        console.log(err.response)
    }
}
