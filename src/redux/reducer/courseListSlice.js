import produce from "immer"
import courseType from "../type/courseListType";

const initialState = {
    categoryList: []
}

const reducer = (state = initialState, {type, payload}) => {

    return produce (state, (draft) => {
        switch(type){
            case courseType.CATEGORY_LIST:
                draft.categoryList = payload;
                break;

            default:
                break;
        }
    })
};

export default reducer;