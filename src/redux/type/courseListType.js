const sliceName = 'courseListSlice';

const courseType = {
    CATEGORY_LIST: 'CATEGORY_LIST',
    GET_COURSES_CATEGORY: 'GET_COURSES_CATEGORY',
    COURSE_LOADING: 'COURSE_LOADING',
    GET_POPULAR_COURSE: 'GET_POPULAR_COURSE', 
    GET_DETAIL_COURSE: 'GET_DETAIL_COURSE',
    EDIT_COURSES: 'EDIT_COURSES',
    CREATE_COURSES: 'CREATE_COURSES',
    UPLOAD_FILE: 'UPLOAD_FILE',
};

Object.keys(courseType).forEach(key => {
    return courseType[key] = sliceName + '/' + courseType[key];
});

export default courseType;