
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, React } from 'react';
import { fetchApiRegister } from '../../redux/action/userAction';
import Swal from 'sweetalert2';




const Register = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  let [validMess, setValidMess] = useState('');
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen:'',
      soDT:'',
      maLoaiNguoiDung:'GP',
      maNhom:'',
      email:'',
    },

    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('* Vui lòng nhập tài khoản!')
                            .min(5, '*Tên Tài Khoản Tối Thiểu 5 Kí Tự, Tối Đa 20 Kí Tự!')
                            .max(20, '*Tên Tài Khoản Tối Thiểu 5 Kí Tự, Tối Đa 20 Kí Tự!'),
      matKhau: Yup.string().required('*Vui lòng nhập mật khẩu!'),
      hoTen: Yup.string().required('*Vui lòng nhập họ tên!')
                          .min(5, '*Họ Tên Tối Thiểu 5 Kí Tự'),
      soDT: Yup.string().matches(/^[0-9]+$/, '* Số điện thoại chỉ nhập số 0-9')
                        .required('*Vui lòng nhập số điện thoại!'),
      maNhom: Yup.string().required('*Vui lòng nhập mã nhóm!'),
      email: Yup.string().email('*Vui Lòng Nhập Đúng Email!').required('*Vui lòng nhập email!'),
    }),

    onSubmit: async (value) => {
      try {

        await dispatch(fetchApiRegister(value));

        Swal.fire({
          title: 'Đăng ký thành công',
          icon: 'success',
          showCancelButton: false,
        }).then(result => {
          if (result.isConfirmed) {
            navigate('/user/login')
          } 
        })
      } catch (err) {
        console.log(err.response)
      }
    },
    
  })


  return (

    <div>
      <div className="flex items-center justify-center h-screen pt-48 pb-10">
        {/* Register Container */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-1/3 flex-col border bg-white px-6 py-10 shadow-md rounded-[4px]">
          <div className="mb-8 flex justify-center items-center">
            <img className="w-24 block" src={require('../../assets/logo/E-learning.png')} alt='...' />
            <h1 className='font-bold text-3xl'>E-Learning</h1>
          </div>
          <div className="flex flex-col text-sm rounded-md">
            <input name='taiKhoan' onChange={formik.handleChange} className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Tài Khoản" />
            {formik.errors.taiKhoan && formik.touched.taiKhoan && (<p className='text-red-700 mb-5'>{formik.errors.taiKhoan}</p>)}
            <input name='matKhau' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Mật Khẩu" />
            {formik.errors.matKhau && formik.touched.matKhau && (<p className='text-red-700 mb-5'>{formik.errors.matKhau}</p>)}
            <input name='hoTen' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Họ Tên" />
            {formik.errors.hoTen && formik.touched.hoTen && (<p className='text-red-700 mb-5'>{formik.errors.hoTen}</p>)}
            <input name='soDT' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Số Điện Thoại" />
            {formik.errors.soDT && formik.touched.soDT && (<p className='text-red-700 mb-5'>{formik.errors.soDT}</p>)}
            <input name='maNhom' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Mã Nhóm" />
            {formik.errors.maNhom && formik.touched.maNhom && (<p className='text-red-700 mb-5'>{formik.errors.maNhom}</p>)}
            <input name='email' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Email" />
            {formik.errors.email && formik.touched.email && (<p className='text-red-700 mb-5'>{formik.errors.email}</p>)}
          </div>
          <button className="mt-5 w-full border p-2 bg-gradient-to-r from-green-800 bg-green-500 text-white rounded-[4px] hover:bg-slate-500 scale-105 duration-300" type="button">Đăng Ký</button>
          <div className="mt-5 flex justify-between text-sm text-gray-600">
            <a>Quên Mật Khẩu?</a>
          </div>
          <div className="flex justify-center mt-5 text-sm">
            <p className="text-gray-400">or you can sign with</p>
          </div>
          <div className="mt-5 flex justify-center gap-3    ">
            <img className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFbUlEQVRoge1ZXWwUVRT+zszs2nZbiUARui2b1lCgJAiWFAMRIoEHFYOtqSL4wAMQGyDxwUQMmiAhSh+NbRFN1AeaQGpacZUHTIjRItLQpCApPw0GdttSUihIty3dnZnjw5T+7Nz52c4WH+j3NHvvd875zt479+cMMI1pPNmgdDjhSshDaqiMSX8ZjFIGLQIwD0D2CCUGoJvAV0FoJcinM5feaKH90L3G9pTA4Ka8Al1SdgF4F0AwRfNOAEcl0mqzGrs6J6thUgn0V87NheY/SIxtAPyTDT6COAPfsqp+8nS4+06qxiknEKsIbQHzlwBmpmrrgLsM3p3TFD2WipHrBHhnqS/W21tHwPbUtbkHA0eyc3P30NetCTd8Vwnw63lZA4r8A0CveJPnEoyTAU2tpHD3oBNVcvS1s9T3WMUDAOHVAVk5wZVLHN8vxwRivb11j1X8IxDWx9T+L5xpNoiVh7YCfDR9qlIHE2/OaYwet+q3TOBBeXCWBPkKgNlTosw9+nRVXWi1xFpOISL5M/z/4gFgpiz7PrXqFI7AYEUwX2f5Ohw2KXnZGiirXoO0uAzSrLkAAL2vB3p7C9TmMLSLzV6Ej0dcVpQFmQ3/RJI7FBFbZ3k3bMRLwSL4q6ohl5SZ+/KKIOUVQVm/GVp7C+I1H0DvuelFPAD4NVWtAvBRcodpBHg/pIEL828CyBd5kpe8iKf2fgMKPO0qsnalFQ/3vQkwp6jZhK6AEglRA7TxjaYRGLoQWgmwULwULJooPhFH4lQ91D9OQI9cNTgFxVDWlsO3YQv07usYrt6RDvEAEBxK5JcCnS22CRhHYvHi5K+qHhXPfT14eHAb9BuXJ3D0jjbEO9qg/noMfO82+EGfK3WBRmOaDVSELDk6SesA2CegM1aI5MvPvzQ25xNxofgJfm5a900WBJQmt5mWUQIVi4yV1RtHnxOn6m3FTxUYWJjcJlqF5omMpcVjK476+4/CAI+mgRX0rusY2rPOlj++TTCdTNpEG1m2oA0069nRZ4522Aq1Ao3sFR6Qk9wg3AemDPrE1Wj8P+zmJRZBlEAMgtsW370NChYBAKhgAbijzWQoCi4tfAGZnzcZPvp6UhInQL/Jv4B0S2SpXx5bvZS15a4jKmvGuHp7iw3TFUzaTAkw+JrIUm0Ojz77NmyBVFjiGE0qXALfhnfGfJwJW3IHKkKO04eAq6YYpgbCeZGxdrEZWvs544fPj4x939kmIRWWIOPj7wHFZ9hfOgvt7z9tBTqBYdYm2Afk01YO4nV7wbF/Dd7Mucis/gn+7QcgFS8HZQSAjCxIxcvh334AmYdOgJ6ZYwSO3Uf88F5P4gGAiE3arA5zNwAUiJzIJSuN81D2DFdBOXYfw4d2QPM6/5kjgWXRwuRqnnkEDEK9lR+t/RwefrgJ2qW/HGNql84aXO8vLyBRvagU6e1Cs3Q1lFUbIZWUgWYbmyTfuWVcaM6EPc/5cRiWFP25rIbOruQOyztxf/n8wwS8ly4FXkDENYHG6B5Rn+WdWFf0fQBSrlVOAe5qCc3yTmyZwIyGzj4GC7N+nGCgyq7oa1vYymmKHmPgSPpluQOBa3OaIg12HMfKXLYS2cVE4vPz1OKXrHvR951IjglQA7TsRGIrGCfTo8sVfg6o6lv0G1QnomMCAEDh7sHAnNw3GPjKuzaHWODawL1IuZvKtMFPEf0VBW8TUw3SXrWjXgbvcprzyXA1AuOR0xg9rkNbREx1AIZTtRdgmIhrNEVblKp4wOtHvsr8oK5KuwFshcXZyQZREI5Ksl4r2mHdIj2fWfdDGmrLX6GTtI6A0pHqQRATPrNSJ4GvMXCeiE9nLY22puMz6zSm8aTjPy9i6LxlaK5BAAAAAElFTkSuQmCC" />
            <img className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC40lEQVRoge3Yz4sXdRzH8Ye7pG4SsgcFpVo3kbR1PdWhLgWpl04evHmwv0FDBSMPpVR0j252kJaQWEIvIiEoopcoVsEfCf4IfyBIoZW47Xb4zPodvs5nPvPd78x6aJ7wOcx75vN6v94zn/nM5zO0tLS0tPTBogY0R7ARo1iWxR7hGqZwo4GcfTOGrwSTs4n2G77EhufitIv1mMSMtPHuNoMf8PqCu8YA9uNxRbNl7R/syzQXhGU4XoPx7vajzjvTqPkzDZifa6ebLGJAM3e+6Ek0Mpz2dyV6gjexGd9mx1VNPsFhvI+3MN11fl9VU1W/A+vxCxbnYlMYzx2PCdPjEM4KU+of2bnlWIu38Rd242Ku7wW8kTt+jE24XNFfkknP3sWzdYnjXIH+0brExxTP85fqSoArBfr/qvCxq/KyfKh4qI1gsLrHKIN4pSA+gJ016EeXB5/VIZ5xMJLjSr/Cr0aE/8Zwv+I5hjPNolwvl3VMDaHxSPwEHvTmsZQHONmjB6QLGI3Er6YczYPYcIl5QLqAlyLxO0k7vXM7El9e1ilVwHQk/mLSTu/E1kAxD0gXcD8SX5e00zuxfcG9sk6pAu5G4u9V6NsLg3g3cq60gBQrxXdb2/oR7mJ7JMcMVvQrfjEifhOr+xUX5vnfIzmmatD3eUR8Fj9LTHMJXsOvJfqH+tB+yqjOev0mtmIPHmaxP4W9wqoeNFfj46xvzPy0sN6qhaM6G5G9wuJui7BizI/XKXxSonMgu6bKX4yJuswTnsKjnPiOLL6rIPGWEp2tFYzPCk+3trs/x0e5BLd0Pjwf4BjO42ssKdEYUu3u76rbPGHYTOSSfDFPndiqc64d0cwvT7AUp3LJvhFWi4vxgmrTalkBPyl/grUwhO8Kks8IG/YUsQKOCDdoQVgkvBP5F3vW/Ap4KIz5xoZNGWvwvc534nqFPtd15vkJYdf33BnBp8J/nxTvZNfWPk22tLS0tPz/+A/3Y3+ksla8tgAAAABJRU5ErkJggg==" />
            <img className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRoge2ZW2gcVRjH/2c22SQ1aZLNRXNraFATvKFs0QdfTPTFiKCIQUwFwZQYkqIY8cELrKLFF2+0G4yVgpBgm4q0oO2DJvpgVUICKohtUFuSzcZoLrK7uezOzPn7kLRddmZ2ZjJJfGg+WHZ2zjnf/P7nfOc7c84CO7Zj17aJTfEyRF/TSvxuAM0SCIJsAlFFsJAECCQoGQVwgeQ4wZFL04FRhIT0+mhPAm77dLlO12Q3yf0kawCAJEgAWPte+xAmZRFKDug5Ijx9oCyyrQJuHIpX+JN4k8DTJPwWgNng0+4jBfKY7lNfi3ZWz225gFsHEk9KicMQDGQHdASfXmeeFD3RnorjWyIg2M/c1cJEn5SiwwjiGf5qHaB/JrfyIDqFumkCgv3ctXLd0mckHtxS+Kvtz/jy5ePRzuplOzbFAXzuNsMDQKu2itMI/er3LGC1MNG3zfBrZVI8UF5S+oEdX9YQumUw0U6JAS/wCoiWej/urc5FfbGCkjwFKZ1QdSKWIn6MpvDxTyuW7SX5xEJvzQnXApo+iZUJRTkPsHyj8HdW+vBecyH2FvssO+lcJIXHPl+08E0AWEhRNMZfNE+xliGkKOKQF/i7Kn0Yenh3Vvh0yxJ2gRzK1y05zW7eMbBcu75IbQjeJ4jD9xfB73OWpR3MmY7St6N7HAtQKXvoYYVtbchDbZFtfkgTkBUeJP1S0bvM2uYY7oSokIl2L9mmuS7XFHQypqN3OI5f/lavkKuSdvBrzyCfwhBfRZvQswpo2hu/h0TtRuFJ4PYKY78AwAvDcXw3lbRtb7FC1+y+GAnGgNF0n2bj3OwFniTKC4xu/1qSOLdReF7+LVsy/ZoJ2Od1kSryGyfvZEwHPcADACWCtgIkebMXeJJQTJJPPCm9wRMgZGOmX0OwkqjyAr9+aTBJR9kmax1SVGX6NQmh9W3ghuEtFMArPACwKNOj2Qi4cvzD/oAh5s1C6L76PEw8e73h/snfVvDS14tO4E1H15jviATJgBN4ACjOE6aTNtNyFaAk3zjg0bjmGJ5kPLO92SSecQpPsy5xaRPzmlN4CGDGVgCICa8T1o39vqA6ggcACVywFUBwzFW28ACvSeDPRc0R/Pr1WKYP4yQGR4zA1pP6ua9iyLncDetlRx8qMWw0fp5V8f5o/EodAFjViKQmncKDCkZsBVyaDozuqVqYAllnB08CZ/9YNZR9xBKIDAWzSzpOnV92M2EzO29SlQ3jmbzGORASEpKDTuCtyqzMAzwADJodRZq+tOs5Ikwi5eWVejPhCSZTqhY282sqYPpAWQTksc2CB4x1HMOTkMRRvNU47VgAANDvf4XknFv47CHkHp7EvC50d3tiAIh0FC+Q4qBbeLvFzSU8CHYh1Gh56Jt14xrtqThOoP9/hA/rb9x0MptP2533TGVlN8FTTuEtRbiEB/ClrkSet+OzPzpoE7ovT7aDPOPi4Wb8zuHJLzRlVxtCzZp3AQCindXLswU3PELBD+3h3Wei9PYEw5ov8ihC9ifTgNnrtJV1CnUO6Aq8M/2tAhyRRPlGFrIs8P8Q7LaL+Uxzfvq0bgu9NSeSSTaR7AOQdLMWWC1SEjiiKckmt/CAmxFIs/jLtfMAusvenTqkaegB2E6iziX8FIABVdXDVouUE9ucv1lDVHYXRPaRsoUSwe+fqWoN5Iv80gKfIgTw74qUwxeXFztOz31DcowCI6psGN+Mv1l3bMeudfsPP8EkRZOLDr8AAAAASUVORK5CYII=" />
            <a className="bg-gray-400 h-7 w-7 rounded-3xl text-center grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 ">...</a>
          </div>

        </form>
      </div>

    </div>
  )
}



export default Register