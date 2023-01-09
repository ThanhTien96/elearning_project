import produce from "immer"

const initialState = {
    
}

const reducer = (state = initialState, {type, payload}) => {
    return produce (state, (draft) => {
        switch(type){

            default:
                break;
        }
    })

}

export default reducer;