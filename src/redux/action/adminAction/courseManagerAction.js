
import { createAction } from '../createAction';
import adminType from '../../type/adminType';
import courseService from '../../../services/courseService';
import courseListType from '../../type/courseListType';
import { isAlertActionSuccess } from './accountManagerAction';
import { isLoadingAction } from '../userAction';

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

            await dispatch(createAction(courseListType.CREATE_COURSES, res.data));
            await dispatch(fetApiCourseAction);
        }catch(err){

            throw err

        }
    }
}

//xoa khoa hoc
export const fetchApiDeleteCourseAction = (maKH) => {
    return async (dispatch) => {
        try {
            const res = await courseService.fetApiDeleteCourse(maKH);
            
            await dispatch(fetApiCourseAction);
        } catch (error) {
            console.log(error);
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