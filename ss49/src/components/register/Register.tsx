
import { Link, useLocation } from 'react-router-dom'

export default function Register() {
    const location = useLocation();
  return (
    <>
    <h2>Bài 4</h2>
    <Link className='underline text-sky-500' to='/random'>Nhấn để sang bài 5</Link>
    <form
    className="flex flex-col p-[20px] w-[500px] border-black-500 border-[1px]  rounded-[5px] ml-[40%]"
    action=""
  >
    <h1 className="text-[32px] font-[600] w-[100%] text-center mb-[30px]">
      Create account
    </h1>
    <label className="mb-[5px] font-[600]" htmlFor="">
      Your email
    </label>
    <input
      placeholder="name@company.com"
      className="shadow-sm border-[1px] pl-[10px] outline-none h-[35px] rounded-[5px] mb-[40px]"
      type="text"
    />
    <label className="mb-[5px] font-[600]" htmlFor="">
      Password
    </label>
    <input
      placeholder="*********"
      className="shadow-sm border-[1px] pl-[10px] outline-none h-[35px] mb-[40px] rounded-[5px]"
      type="text"
    />
    <label className="mb-[5px] font-[600]" htmlFor="">
      Confirm password
    </label>
    <input
      placeholder="*********"
      className="shadow-sm border-[1px] pl-[10px] outline-none h-[35px] mb-[40px] rounded-[5px]"
      type="text"
    />
    <button className="h-[35px] bg-blue-500 rounded-[5px] text-white mb-[40px]">
      Login as account
    </button>
    <span className="flex justify-center text-slate-400">
      Already have account?{" "}
      <p className="text-slate-600 ml-[5px] cursor-pointer">
        {" "}
        Login here
      </p>
    </span>
  </form></>
  )
}
