import produce from "immer"
import userType from "../type/userType";

const initialState = {
    profile: null,
}

const reducer = (state = initialState, {type, payload}) => {
    return produce (state, (draft) => {
        switch(type){
            case userType.GET_PROFILE:
                draft.profile = payload;
                break;
            case userType.USER_REGISTER:
                draft.profile = payload;
                break;
            default:
                break;
        }
    })

}

export default reducer;