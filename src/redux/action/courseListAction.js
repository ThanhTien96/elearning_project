
// action lấy danh mục khóa học 

import coursesService from "../../services/courseService";
import courseType from "../type/courseListType";

export const fetchApiCategoryListAction = async (dispatch) => {
    try{
        const res = await coursesService.fetchApiCategory();
        dispatch({
            type: courseType.CATEGORY_LIST,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    };
};