
import { createAction } from '../createAction';
import adminType from '../../type/adminType';
import courseService from '../../../services/courseService';
import courseListType from '../../type/courseListType';
import { isLoadingAction } from '../userAction';

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
}
