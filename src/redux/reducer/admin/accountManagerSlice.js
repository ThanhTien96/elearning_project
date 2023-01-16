import produce from "immer";
import adminType from "../../type/adminType";





const initialState = {
    accountList: null,
}



const reducer = (state = initialState, {type, payload}) => {
    
    return produce(state, (draft) => {
        switch(type){
            case adminType.GET_ACCOUNT_LIST:
                draft.accountList = payload;
                break;
        
            
            default:
                break;
        }
    })
};

export default reducer;



