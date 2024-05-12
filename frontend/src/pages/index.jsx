import FoodContentComp from "@/components/FoodContectComp";
import HeaderComp from "@/components/HeaderComp";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title="Home" />
        <div className="flex flex-col justify-center items-center bg-white min-w-full min-h-screen ">
          <div className="flex flex-row justify-between bg-blue-50 w-full h-screen pt-[70px]">
            <div className="flex-1 flex flex-col pl-[20px] items-start min-w-[160px] max-w-[300px]  border-r-2 border-gray">
              <h1 className="text-black font-bold pb-[10px] text-2xl pt-[30px]">
                Menu
              </h1>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {}}
              >
                <Image
                  src={"/home_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px]">Home</p>
              </button>

              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {}}
              >
                <Image
                  src={"/profile_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px]">Profile</p>
              </button>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {}}
              >
                <Image
                  src={"/recomender_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px]">Recomender</p>
              </button>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {}}
              >
                <Image
                  src={"/bookmark_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px]">Bookmark</p>
              </button>
              <div className="h-full"></div>
              <div className="text-black text-lg pb-[30px]">Username</div>
            </div>
            <div className="flex flex-auto flex-col w-[50px] h-[50px] ">
              <FoodContentComp />
            </div>
            <div className="flex flex-col flex-1 max-w-[370px] min-w-[200px] bg-blue-500">
              Makan nasi
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
