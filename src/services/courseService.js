import { apiPathCourseList } from "../utils/apiPath"
import { maNhom } from "../utils/index"
import requester from "./apiRequester"

class CoursesService {
    // call api lay danh mục khóa học
    fetchApiCategory = () => {
        return requester({
            url: apiPathCourseList.CATEGORY_LIST,
            method: 'GET',
        })
    }

    // call api lay khoa hoc theo danh muc
    fetchApiCoursesCategory = (category) => {
        return requester({
            url: apiPathCourseList.GET_COURSES_CATEGORY,
            method: 'GET',
            params: {
                maDanhMuc: category,
                MaNhom: maNhom,
            }
        })
    }

    // call api lay danh sach khoa hoc pho bien
    fetchApiPopularCourses = (page = 1) => {
        return requester({
            url: apiPathCourseList.GET_POPULAR_COURSES,
            method: 'GET',
            params: {
                page: page,
                pageSize: 8,
                MaNhom: maNhom,
            },
        });
    };

    // call api lấy thông tin chi tiết khóa học
    fetchApiDetailCourse = (maKH) => {
        return requester({
            url: apiPathCourseList.GET_COURSE_DETAIL,
            method: 'GET',
            params: {
                maKhoaHoc: maKH,
            },
        });
    };

    // tim kiem khoa hoc
    fetchApiSearchCourse = (tenKH) => {
        return requester({
            url: apiPathCourseList.SEARCH_COURSES,
            method: 'GET',
            params: {
                MaNhom: maNhom,
                tenKhoaHoc: tenKH,
            },
        });
    };

    //them khoa hoc
    fetApiCreateCourse = (formData) => {
        return requester ({
            url: apiPathCourseList.CREATE_COURSES,
            method: 'POST',
            data: formData,

        })
    }

    //upload file anh
    fetApiUploadfile = (formData) => {
        return requester ({
            url: apiPathCourseList.UPLOAD_FILE,
            method: 'POST',
            data: formData,
        })
    }

    //edit khoa hoc
    fetchApiEditCourse = (formData) => {
        return requester ({
            url: apiPathCourseList.EDIT_COURSES,
            method: 'POST',
            data: formData,
        })
    }

};

const coursesService = new CoursesService();

export default coursesService;