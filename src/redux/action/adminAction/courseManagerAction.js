
import { createAction } from '../createAction';
import adminType from '../../type/adminType';
import courseService from '../../../services/courseService';
import courseListType from '../../type/courseListType';

//lay danh sach khoa hoc
export const fetApiCourseAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await courseService.fetchApiPopularCourses(page);
            dispatch(createAction(adminType.GET_COURSE_LIST, res.data))
        } catch (err) {
            console.error(err);
        }

    }
}

//them khoa hoc
export const fetchApiCreateCourseAction = (formData) => {
    return async (dispatch) => {
        try {
            const res = await courseService.fetApiCreateCourse(formData);
            
            console.log(res.data);

            dispatch(createAction(courseListType.CREATE_COURSES, res.data));
        }catch(err){
            console.error(err);
        }
    }
}

//upload file
export const fetchApiUploadFileAction = (formData) => {
    return async (dispatch) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}