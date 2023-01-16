const sliceName = 'adminSlice';

const adminType = {
    GET_ACCOUNT_LIST: 'GET_ACCOUNT_LIST',
}

Object.keys(adminType).forEach(key => {
    return adminType[key] = sliceName + '+' + adminType[key];
});

export default adminType;