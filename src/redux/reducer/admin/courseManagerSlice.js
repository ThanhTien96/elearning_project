import produce from "immer";
import adminType from "../../type/adminType";


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

            default:
                break;
        }
    })
};

export default reducer;