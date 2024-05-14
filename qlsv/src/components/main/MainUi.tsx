import Add from "../add/Add";
import List from "../list/List";

export default function MainUi() {
  return (
    <>
      <h1>Quản lí sinh viên</h1>
      <Add />
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <List />
          {/* <tr>
            <td>1</td>
            <td>SV001</td>
            <td>Nguyễn Văn A</td>
            <td>01/02/2005</td>
            <td>nva@gmail.com</td>
            <td>
              <button className="offline">Ngừng hoạt động</button>
            </td>
            <td className="tools">
              <button className="block">Chặn</button>
              <button className="edit">Sửa</button>
              <button className="delete">Xóa</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}
