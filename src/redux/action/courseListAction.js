
// action lấy danh mục khóa học 

import coursesService from "../../services/courseService";
import courseType from "../type/courseListType";
import { createAction } from "./createAction";


// action lay danh muc khoa hoc
export const fetchApiCategoryListAction = async (dispatch) => {
    try {
        const res = await coursesService.fetchApiCategory();
        dispatch(createAction(courseType.CATEGORY_LIST, res.data));
    } catch (err) {
        console.log(err);
    };
};


// action lay khoa hoc theo danh muc

export const fetchApiCoursesWithCategoryAction = (category) => async (dispatch) => {
    try {

        dispatch(createAction(courseType.COURSE_LOADING, true))

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
        const res = await coursesService.fetchApiPopularCourses(page);
        console.log(res.data);

        dispatch(createAction(courseType.GET_POPULAR_COURSE, res.data));
        
    } catch (err) {
        console.log(err)
    }
}