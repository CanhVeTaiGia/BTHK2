import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  const users = [
    { name: "John", email: "john@gmail.com", address: "Hà Nội" },
    { name: "Jane", email: "jane@gmail.com", address: "Hà Nam" },
  ];

  return (
    <div className="flex">
      {users.map((e) => {
        return (
          <div className="mr-[10px] border-black border-[1px]">
            <p>id: {e.name}</p>
            <p>id: {e.email}</p>
            <p>id: {e.address}</p>
            <button
              onClick={() => {
                navigate("/UserDetail", { state: e });
              }}
              className="h-[20px] text-center w-[100%] border-[1px]"
            >
              Xem chi tiết
            </button>
          </div>
        );
      })}
    </div>
  );
}
