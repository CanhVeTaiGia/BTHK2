export default function Login() {
  return (
    <>
      <form
        className="overflow-hidden flex w-[100%] h-[100vh] border-black border-[1px] "
        action=""
      >
        <video
          className="h-[100%] w-[100%]"
          autoPlay
          muted
          loop
          src="./src/assets/ww.mp4"
        ></video>
        <div className="p-[100px] w-[100%] pb-[80px]">
          <h1 className="text-[44px] font-[600] pb-[80px]">Login</h1>
          <div className="flex flex-col  gap-[20px]">
            <label htmlFor="email">E-Mail</label>
            <input
              className="border-[1px] outline-none ps-[10px] w-[100%] rounded-[5px] h-[50px]"
              name="email"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-[20px] gap-[20px]">
            <label htmlFor="password">Mật khẩu</label>
            <input
              className="border-[1px] outline-none ps-[10px] w-[100%] rounded-[5px] h-[50px]"
              name="password"
              type="password"
            />
          </div>
          <p className="mt-[10px] mb-[10px] w-[120px] ms-[600px] cursor-pointer font-[500]">
            Quên mật khẩu
          </p>
          <button className="w-[100%] h-[40px] bg-blue-500 rounded-[5px] mb-[50px] text-white">
            Login
          </button>
          <div className="relative w-[100%] h-[1px] border-[1px] border-inherit-500">
            <p className=" left-[47%] top-[-13px] text-slate-400 text-center absolute w-[50px] h-[50px] bg-white">
              Or
            </p>
          </div>
          <button className="border-[2px] border-inherit-700 w-[100%] h-[40px] mt-[50px] rounded-[5px]">
            Register now
          </button>
        </div>
      </form>
    </>
  );
}
