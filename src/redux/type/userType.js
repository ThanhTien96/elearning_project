const sliceName = 'userSlice';

const userType = {
    
};

Object.key(userType).forEach(key => {
    return userType[key] = sliceName + '/' + userType[key]
});

export default userType;

