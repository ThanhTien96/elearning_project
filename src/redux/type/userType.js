const sliceName = 'userSlice';

const userType = {
    USER_LOGIN: 'USER_LOGIN',
    USER_REGISTER: 'USER_REGISTER',
    GET_PROFILE: 'GET_PROFILE',
    IS_LOADING: 'IS_LOADING',
    SET_TAB_ACTIVE_KEY: 'SET_TAB_ACTIVE_KEY',
};

Object.keys(userType).forEach(key => {
    return userType[key] = sliceName + '/' + userType[key]
});

export default userType;

