const sliceName = 'userSlice';

const userType = {
    USER_LOGIN: 'USER_LOGIN',

};

Object.keys(userType).forEach(key => {
    return userType[key] = sliceName + '/' + userType[key]
});

export default userType;

