import produce from "immer";
import adminType from "../../type/adminType";
import courseType from '../../type/courseListType';


const initialState = {
    courseList: null,
    courseStudent: [],

};


const reducer = (state = initialState, {
    type,
    payload
}) => {

    return produce(state, (draft) => {
        switch (type) {
            case adminType.GET_COURSE_LIST:
                draft.courseList = payload;
                break;
            case courseType.EDIT_COURSES:
                draft.courseList = payload;
                break;

            case adminType.GET_COURSE_STUDENT:
                draft.courseStudent = payload;
                break;

            default:
                break;
        }
    })
};

export default reducer;