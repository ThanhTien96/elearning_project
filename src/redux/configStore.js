import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userSlice from './reducer/userSlice';

const rootReducer = combineReducers({
    userSlice,
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store