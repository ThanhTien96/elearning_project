import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userSlice from './reducer/userSlice';
import courseList from './reducer/courseListSlice';

const rootReducer = combineReducers({
    userSlice,courseList,
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store