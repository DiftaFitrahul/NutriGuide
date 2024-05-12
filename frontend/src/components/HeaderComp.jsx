export default function HeaderComp({ title }) {
  return (
    <nav className="bg-white flex justify-center items-center w-screen h-[70px] fixed left-0 z-[999]  shadow-xl">
      <div className="text-black text-2xl font-bold">{title}</div>
    </nav>
  );
}
