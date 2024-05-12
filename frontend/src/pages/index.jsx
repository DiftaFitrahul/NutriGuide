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
            <div className="flex-1 flex flex-col pl-[20px] items-start min-w-[120px] max-w-[300px]  border-r-2 border-gray">
              <h1 className="text-black font-bold pb-[10px] text-2xl pt-[30px]">
                Menu
              </h1>
              <button className="text-black text-lg" onClick={() => {}}>
                Home
              </button>
              <button className="text-black text-lg" onClick={() => {}}>
                Profile
              </button>
              <button className="text-black text-lg" onClick={() => {}}>
                Recomender
              </button>
              <button className="text-black text-lg" onClick={() => {}}>
                Bookmark
              </button>
              <div>Username</div>
            </div>
            <div className="flex flex-auto flex-row ">
              <Image
                src={"/Data_contoh.png"}
                alt="email"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col flex-1 max-w-[300px] min-w-[200px] bg-blue-500">
              Makan nasi
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
