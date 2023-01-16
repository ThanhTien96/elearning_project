
// api path đăng ký đăng nhập

export const apiPathUser = {
    USER_LOGIN: '/api/QuanLyNguoiDung/DangNhap',
    USER_REGISTER: '/api/QuanLyNguoiDung/DangKy',
}

// api path lay danh sach khoa hoc, danh muc

export const apiPathCourseList = {
    CATEGORY_LIST: '/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
    GET_COURSES_CATEGORY: '/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc',
    GET_POPULAR_COURSES: '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
}

//api path quan ly nguoi dung
export const apiPathAdminList = {
    GET_API_ACCOUNT_LIST: '/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang',
    ADD_ACCOUNT: '/api/QuanLyNguoiDung/ThemNguoiDung',
    GET_ACCOUNT_PROFILE: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    
}