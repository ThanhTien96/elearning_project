import { apiPathCourseList } from "../utils/apiPath"
import requester from "./apiRequester"

class CoursesService {
    // call api lay danh mục khóa học
    fetchApiCategory = () => {
        return requester({
            url: apiPathCourseList.CATEGORY_LIST,
            method: 'GET',
        })
    }

}

const coursesService = new CoursesService();

export default coursesService;