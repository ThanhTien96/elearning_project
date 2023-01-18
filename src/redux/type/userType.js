const sliceName = 'userSlice';

const userType = {
    USER_LOGIN: 'USER_LOGIN',
    USER_REGISTER: 'USER_REGISTER',
    GET_PROFILE: 'GET_PROFILE',

};

Object.keys(userType).forEach(key => {
    return userType[key] = sliceName + '/' + userType[key]
});

export default userType;

