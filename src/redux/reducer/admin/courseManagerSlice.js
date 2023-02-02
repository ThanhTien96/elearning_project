import produce from "immer";
import adminType from "../../type/adminType";
import courseType from '../../type/courseListType';


const initialState = {
    courseList: null,

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
            case courseType.CREATE_COURSES:
                draft.courseList = payload;
                break;

            default:
                break;
        }
    })
};

export default reducer;