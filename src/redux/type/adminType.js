const sliceName = 'adminSlice';

const adminType = {
    GET_ACCOUNT_LIST: 'GET_ACCOUNT_LIST',
    CREATE_ACCOUNT: 'CREATE_ACCOUNT',
    EDIT_ACCOUNT: 'EDIT_ACCOUNT',
    GET_PROFILE: 'GET_PROFILE',
    FIND_ACCOUNT: 'FIND_ACCOUNT',

}

Object.keys(adminType).forEach(key => {
    return adminType[key] = sliceName + '+' + adminType[key];
});

export default adminType;