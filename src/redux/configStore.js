import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userSlice from './reducer/userSlice';
import courseList from './reducer/courseListSlice';
import accountManagerSlice from './reducer/admin/accountManagerSlice';

const rootReducer = combineReducers({
    userSlice,courseList,accountManagerSlice,
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store