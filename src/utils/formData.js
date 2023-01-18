class FormData {
    dataRegisterCourse = (maKH, taiKhoan) => {
        return {maKhoaHoc: maKH, taiKhoan: taiKhoan}
    };
};

const formData = new FormData();

export default formData;