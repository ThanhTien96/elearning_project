import produce from "immer"
import userType from "../type/userType";

const initialState = {
    profile: null,
}

const reducer = (state = initialState, {type, payload}) => {
    return produce (state, (draft) => {
        switch(type){
            case userType.USER_LOGIN:
                draft.profile = payload;
                break;
            default:
                break;
        }
    })

}

export default reducer;