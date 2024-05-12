import Image from "next/image";

export default function FoodContentComp() {
  return (
    <div className="flex flex-col lg:flex-row items-start px-[10px] py-[20px] border-b border-black">
      <Image
        src={"/Data_contoh.png"}
        alt="email"
        width={100}
        height={100}
        layout="responsive"
        className=" max-w-[170px]"
      />
      <div className="flex flex-col pl-[15px]">
        <h1 className="text-black font-semibold text-2xl">Nasi Goreng</h1>
        <h2 className="text-black text-lg">110 Calories</h2>
        <p className="text-black">
          Nasi Goreng merupakan makanan ikonik di indonesia dan sering dijumpai
          di pinggir jalan, makanan ini merupakan makanan favorit masyarakat
          indonesia dan memiliki berbagai macama olahan
        </p>
      </div>
    </div>
  );
}
