import { useState } from "react";
import Image from "next/image";

export default function TrendingComp({ title, onClickMenu }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-row items-start justify-between py-[10px]">
      <div className="flex flex-col">
        <p className="text-black font-semibold ">{title}</p>
      </div>
      <button onClick={toggleMenu} className="flex-shrink-0 ml-2">
        <Image src={"/dot_icon.png"} alt="email" width={30} height={30} />
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              onClick={() => {
                setMenuOpen(false);
                onClickMenu("Open");
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              Open
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
