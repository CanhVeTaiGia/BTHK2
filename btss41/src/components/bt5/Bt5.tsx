export default function Bt5() {
  return <div className="size-[200px] bg-sky-300 relative border-8 border-sky-200">
    <p className="absolute top-3 left-5">Relitive Parent</p>
    <div className="absolute w-24 h-14 text-sm flex items-center justify-center text-white rounded-lg bg-sky-500 bottom-0 left-0 ">Absolate child</div>
  </div>;
}
