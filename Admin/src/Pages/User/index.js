import { BsPencilSquare, BsFillPersonXFill, BsFillPersonPlusFill } from "react-icons/bs";
import ResponsivePagination from 'react-responsive-pagination';
import Client from "../../Assets/Client.png"
import ModifyClient from "./Modify";
import AddClient from "./AddClient";
import { useState } from "react";
import BanClient from "./Ban";

let dataAll = [{
    avatar: Client, id: 1, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 2, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 3, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 4, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 5, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 6, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 7, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 8, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 9, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 10, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 11, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 12, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 13, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 14, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 14, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 1, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 2, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 3, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 4, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 5, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 6, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 2, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 3, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 4, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Cấm"
},
{
    avatar: Client, id: 5, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
{
    avatar: Client, id: 6, username: "qwerryi", fullname: "Arlene McCoy", birth: "26/9/2003", grade: 50,
    phone: "01234456789", email: "nguyenqwedv123@gmail.com", status: "Hoạt động"
},
]


const User = () => {
    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 })
    const itemPerPage = 7
    const endOffset = itemOffset.offset + itemPerPage
    const data = dataAll.slice(itemOffset.offset, endOffset)
    const countPage = Math.ceil(dataAll.length / itemPerPage)

    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % dataAll.length  //event start from 1
        SetOffset({ offset: newOffset, current: (event) })
    }
    console.log("Add")

    const [placeAdd, setPlace] = useState(null);

    return (
        <>
            {placeAdd}
            <div className='container-fluid p-3'  >
                <form className="d-flex justify-content-center mt-3">
                    <div className="mb-3" style={{ width: "30%" }}>
                        <input type="text" className=" form-control " placeholder="Tìm kiếm theo tên" name="search" />
                    </div>
                    <button type="submit" className=" btn btn-success h-25 ms-3">Tìm kiếm</button>
                </form>
                <div className="row">
                    <div className="mb-4 col-md-9">
                        <div className="row">
                            <p className="ms-2 col-1 mt-2">All({dataAll.length})</p>
                            <div className="col-6">
                                {<AddClient />}
                                <button className="btn btn-danger rounded-pill ms-4">Xóa  -</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <select class="form-select w-100">
                            <option selected disabled hidden >Sắp xếp theo</option>
                            <option value="name" >Tên</option>
                            <option value="id">Mã khách hàng</option>
                            <option value="grade" >Điểm tích lũy</option>
                        </select>

                    </div>
                </div>
                <div className='table-responsive-lg '>
                    <table className='table '>
                        <thead>
                            <tr >
                                <th><input type="checkbox"></input></th>
                                <th>Ảnh</th>
                                <th>Mã thành viên</th>
                                <th>Họ và Tên</th>
                                <th>Ngày sinh</th>
                                <th>Điện thoại</th>
                                <th>Email</th>
                                <th>Điểm tích lũy</th>
                                <th>Trạng thái</th>
                                <th>Tùy chọn</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "#6C757D" }}>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="pt-3"><input type="checkbox" value={item.id}></input></td>
                                                <td><div>
                                                    <img src={item.avatar} />
                                                </div></td>
                                                <td className="pt-3">{item.id}</td>
                                                <td className="pt-3">{item.fullname}</td>
                                                <td className="pt-3">{item.birth}</td>
                                                <td className="pt-3">{item.phone}</td>
                                                <td className="pt-3">{item.email}</td>
                                                <td className="pt-3">{item.grade}</td>
                                                <td className="pt-3">{item.status}</td>
                                                <td>
                                                    <div className="row pt-2">
                                                        <div className="col-4 text-primary" data-bs-toggle="tooltip" title="Chỉnh sửa" style={{ cursor: "pointer" }}>
                                                            {<ModifyClient user={item} />}
                                                        </div>
                                                        {<BanClient user={item} />
                                                        }
                                                    </div>
                                                </td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className=" position-block py-1  row" style={{ bottom: "0px" }}>
                    <p className="col-sm-6 mt-2" style={{ color: "#6C757D" }}>Hiển thị {data.length} trong tổng số {dataAll.length} thành viên</p>
                    <div className="col-sm-6 d-flex justify-content-end">
                        {
                            <ResponsivePagination
                                current={itemOffset.current}
                                total={countPage}
                                onPageChange={handelPagination}

                            />
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default User;
