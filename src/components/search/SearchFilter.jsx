import React from 'react';
import { Checkbox, Rate } from 'antd';
import { useSelector } from 'react-redux';


const SearchFilter = () => {
    const { categoryList } = useSelector(state => state.courseList);
    console.log(categoryList)


    const onChange = (e) => {
        console.log(`checked  = ${e.target.value}`);
    };
    return (
        <div className='border border-solid border-gray-400'>
            <h1 className='text-lg font-semibold text-center py-2 border-b border-solid border-gray-400'>Lọc</h1>
            <div className='p-5 border-b border-solid border-gray-400'>
                <p>Khóa Học</p>
                {categoryList.map((ele, index) => (<div key={index} className='py-2'><Checkbox className='border-teal-500' value={ele.maDanhMuc} onChange={onChange}>{ele.tenDanhMuc}</Checkbox></div>))}
            </div>
            <div className='p-5 border-b border-solid border-gray-400'>
                <p>Cấp Độ</p>
                <div className='py-2'><Checkbox>Tất Cả</Checkbox></div>
                <div className='py-2'><Checkbox>Mới Bắt Đầu</Checkbox></div>
                <div className='py-2'><Checkbox>Trung Cấp</Checkbox></div>
                <div className='py-2'><Checkbox>Nâng Cao</Checkbox></div>
            </div>
            <div className='p-5'>
                <p>Cấp Độ</p>
                <div className='py-2'>
                    <Checkbox>
                        <Rate className='font-lg text-teal-500' disabled defaultValue={1} />
                    </Checkbox></div>
                <div className='py-2'>
                    <Checkbox>
                        <Rate className='font-lg text-teal-500' disabled defaultValue={2} />
                    </Checkbox>
                </div>
                <div className='py-2'>
                    <Checkbox>
                        <Rate className='font-lg text-teal-500' disabled defaultValue={3} />
                    </Checkbox>
                </div>
                <div className='py-2'>
                    <Checkbox>
                        <Rate className='font-lg text-teal-500' disabled defaultValue={4} />
                    </Checkbox>
                </div>
                <div className='py-2'>
                    <Checkbox>
                        <Rate className='font-lg text-teal-500' disabled defaultValue={5} />
                    </Checkbox>
                </div>
            </div>

        </div>
    )
}

export default SearchFilter