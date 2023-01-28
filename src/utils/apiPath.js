
// api path đăng ký đăng nhập

export const apiPathUser = {
    USER_LOGIN: '/api/QuanLyNguoiDung/DangNhap',
    USER_REGISTER: '/api/QuanLyNguoiDung/DangKy',
    GET_ACCOUNT_PROFILE: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    REGISTER_COURSE: '/api/QuanLyKhoaHoc/DangKyKhoaHoc',
    EDIT_PROFILE: '/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung'
}

// api path lay danh sach khoa hoc, danh muc

export const apiPathCourseList = {
    CATEGORY_LIST: '/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
    GET_COURSES_CATEGORY: '/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc',
    GET_POPULAR_COURSES: '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
    GET_COURSE_DETAIL: '/api/QuanLyKhoaHoc/LayThongTinKhoaHoc',
}

//api path quan ly nguoi dung
export const apiPathAdminList = {
    GET_API_ACCOUNT_LIST: '/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang',
    ADD_ACCOUNT: '/api/QuanLyNguoiDung/ThemNguoiDung',
    GET_ACCOUNT_PROFILE: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    EDIT_ACCOUNT: '/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
    DELETE_ACCOUNT: '/api/QuanLyNguoiDung/XoaNguoiDung',
    SEARCH_ACCOUNT_PAGINATION: 'api/QuanLyNguoiDung/TimKiemNguoiDung',
   
}

//api path quan ly khoa hoc
export const apiPathCourseManagerList = {
    GET_API_COURSE_LIST: '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',

}