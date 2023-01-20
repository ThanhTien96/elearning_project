
// action lấy danh mục khóa học 

import coursesService from "../../services/courseService";
import courseType from "../type/courseListType";
import { createAction } from "./createAction";
import { isLoadingAction } from "./userAction";


// action lay danh muc khoa hoc
export const fetchApiCategoryListAction = async (dispatch) => {
    try {
        dispatch(isLoadingAction(true));
        const res = await coursesService.fetchApiCategory();
        dispatch(createAction(courseType.CATEGORY_LIST, res.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(isLoadingAction(false));
    }
};


// action lay khoa hoc theo danh muc

export const fetchApiCoursesWithCategoryAction = (category) => async (dispatch) => {
    try {

        dispatch(createAction(courseType.COURSE_LOADING, true));

        const res = await coursesService.fetchApiCoursesCategory(category);

        dispatch(createAction(courseType.GET_COURSES_CATEGORY, res.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(createAction(courseType.COURSE_LOADING, false))
    }
};

// action lay danh sach khoa hoc pho bien

export const fetchApiPopularCoursesAction = (page) => async (dispatch) => {
    try{
        dispatch(createAction(courseType.COURSE_LOADING, true));

        const res = await coursesService.fetchApiPopularCourses(page);

        dispatch(createAction(courseType.GET_POPULAR_COURSE, res.data));
        
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(createAction(courseType.COURSE_LOADING, false));
    }
}

// action lấy chi tiết khóa học

export const fetchApiDetailCourseAction = (maKH) => async (dispatch) => {
    try {
        dispatch(isLoadingAction(true));
        const res = await coursesService.fetchApiDetailCourse(maKH);
        await dispatch(createAction(courseType.GET_DETAIL_COURSE, res.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(isLoadingAction(false));
    }
};