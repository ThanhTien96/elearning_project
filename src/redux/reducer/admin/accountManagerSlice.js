import adminService from "../../../services/adminSevice";
import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    menberList: [],
}

const accountManagerSlice = createSlice({
    name: 'accountManageSlice',
    initialState,
    reducers: {
      // lay danh sach phim action
      fetchmenberListAction: (state, action) => {
          state.menberList = action.payload;
      },
      // lấy thông tin chi tiêt phim
      fetchApiFilmDetailAction: (state, action) => {
          state.filmDetail = action.payload;
      },
      // set state thông báo thành công
      isAlertActionSuccess: (state, action) => {
          state.isAlertSuccess = action.payload;
      },
      //set state thong bao loi
      isAlertActionERR: (state, action) => {
          state.isAlertERR = action.payload;
      }
    },
});

export const {
    fetchMenberListAction,
    fetchApiFilmDetailAction,
    isAlertAction,
    isAlertActionSuccess,
    isAlertActionERR,
} = accountManagerSlice.actions

// lay danh sach nguoi dung
export const fetchMenberList = (tenPhim) => async (dispatch, setState) => {
    try{

        const res = await adminService.getFilmApiService(tenPhim);

        const action = fetchMenberListAction(res.data.content);

        dispatch(action);

    }catch(err){

        console.log(err);

    }
};




// them nguoi dung moi
export const AddNewMenberApi = (formData) => async (dispatch, setState) => {
    try{

        await adminService.addNewMenber(formData);
        await dispatch()
    }catch(err){
        throw err;

    }

}