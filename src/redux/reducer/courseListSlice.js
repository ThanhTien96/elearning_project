import produce from "immer"
import courseType from "../type/courseListType";

const initialState = {
    categoryList: [],
    courseCategory: [],
    courseLoading: false,
    popularCourses: null,
}

const reducer = (state = initialState, {type, payload}) => {

    return produce (state, (draft) => {
        switch(type){
            case courseType.CATEGORY_LIST:
                draft.categoryList = payload;
                break;

            case courseType.GET_COURSES_CATEGORY:
                draft.courseCategory = payload;
                break;

            case courseType.COURSE_LOADING:
                draft.courseLoading = payload;
                break;
            
            case courseType.GET_POPULAR_COURSE:
                draft.popularCourses = payload;
                break;

            default:
                break;
        }
    })
};

export default reducer;