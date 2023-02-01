const sliceName = 'adminSlice';

const adminType = {
    //quan ly tai khoan nguoi dung type
    GET_ACCOUNT_LIST: 'GET_ACCOUNT_LIST',
    CREATE_ACCOUNT: 'CREATE_ACCOUNT',
    EDIT_ACCOUNT: 'EDIT_ACCOUNT',
    GET_PROFILE: 'GET_PROFILE',
    FIND_ACCOUNT: 'FIND_ACCOUNT',
    DELETE_ACCOUNT: 'DELETE_ACCOUNT',
    GET_COURSE_LIST: 'GET_COURSE_LIST',

}

Object.keys(adminType).forEach(key => {
    return adminType[key] = sliceName + '+' + adminType[key];
});

export default adminType;