import { useState } from "react";

// localStorage.setItem('students', JSON.stringify([{id: 'SV001',name: 'Sơn', birthDate: '05/06/2005', email: 's@gmail.com', status: true, isBlock: false},{id: 'SV002', name: 'Ao', birthDate: '06/04/2004', email: 'a@gmail.com', status: false, isBlock: false}]))
interface Student {
  id: string;
  name: string;
  birthDate: string;
  email: string;
  status: boolean;
  isBlock: boolean;
}
export default function List() {
  const [students, setStudents] = useState<Student[]>(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  });
  const handleBlock = (id: string) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, isBlock: !student.isBlock };
      }
      return student;
    });
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleEdit = (id: string) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
      }
    });
  };
  const handleDelete = (id: string) => {
    const foundIndex = students.findIndex((student) => {
      if (student.id === id) {
        return student;
      }
    });
    if (foundIndex === -1) {
      return alert("Không có dữ liệu");
    }
    if(students.length === 1){
      setStudents([]);
      localStorage.setItem("students", JSON.stringify([]));
      return;
    }
    const updateStudents = students.splice(foundIndex, 1);
    setStudents(updateStudents);
    localStorage.setItem("students", JSON.stringify(updateStudents));
  };
  return (
    <>
      {students.length > 0
        ? students.map((e, i) => {
            return (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.birthDate}</td>
                <td>{e.email}</td>
                <td>
                  {e.isBlock ? (
                    <button className="blocked">Bị chặn</button>
                  ) : e.status ? (
                    <button className="online">Đang hoạt động</button>
                  ) : (
                    <button className="offline">Ngừng hoạt động</button>
                  )}
                </td>
                <td className="tools">
                  {e.isBlock ? (
                    <button onClick={() => handleBlock(e.id)} className="block">
                      Bỏ Chặn
                    </button>
                  ) : (
                    <button onClick={() => handleBlock(e.id)} className="block">
                      Chặn
                    </button>
                  )}
                  <button onClick={() => handleEdit(e.id)} className="edit">
                    Sửa
                  </button>
                  <button onClick={() => handleDelete(e.id)} className="delete">
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })
        : ""}
    </>
  );
}
