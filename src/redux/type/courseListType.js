const sliceName = 'courseListSlice';

const courseType = {
    CATEGORY_LIST: 'CATEGORY_LIST',
};

Object.keys(courseType).forEach(key => {
    return courseType[key] = sliceName + '/' + courseType[key];
});

export default courseType;