import FoodContentComp from "@/components/FoodContectComp";
import HistoryComp from "@/components/HistoryComp";
import Head from "next/head";
import HeaderComp from "@/components/HeaderComp";
import Image from "next/image";
import BookmarkCard from "@/components/BookmarkCardComp";
import { toast } from "react-toastify";

import TrendingComp from "@/components/TrendingComp";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import Cookies from "js-cookie";

export default function Bookmark() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    console.log(Cookies.get("Auth"));
    if (Cookies.get("Auth") === undefined) {
      toast.error("Anda belum login!", {
        zIndex: 9999,
      });
      setInterval(() => {
        window.location.href = "/auth/login";
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);

  function logout() {
    Cookies.remove("Auth");
    localStorage.removeItem("user_id");
    toast.success("Berhasil Logout", {
      zIndex: 9999,
    });
    setInterval(() => {
      window.location.href = "/auth/login";
      setIsLoading(false);
    }, 1000);
  }
  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title={"Bookmark"} />
        <div className="flex flex-col justify-center items-center bg-white min-w-full min-h-screen ">
          <div className="flex flex-row justify-between bg-blue-50 w-full h-screen pt-[70px]">
            <div className="flex-1 flex flex-col pl-[20px] items-start min-w-[160px] max-w-[300px]  border-r-2 border-gray">
              <h1 className="text-black font-bold pb-[10px] text-2xl pt-[30px]">
                Menu
              </h1>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  router.replace("/");
                }}
              >
                <Image
                  src={"/home_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px] ">Home</p>
              </button>

              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  router.replace("/profile");
                }}
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
                onClick={() => {
                  router.replace("/recomender");
                }}
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
                <p className="pl-[7px] font-bold">Bookmark</p>
              </button>
              <div className="h-full"></div>
              <button
                className="text-black text-lg pb-[30px] flex flex-row items-center"
                onClick={logout}
              >
                <Image
                  src={"/logout_logo.png"}
                  alt="email"
                  width={20}
                  height={20}
                />
                <p className="pl-2 font-semibold">Log Out</p>
              </button>
            </div>
            <>
              <div className="flex-auto grid grid-cols-5 overflow-auto padding-10 place-items-center gap-5 mt-10">
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
                <BookmarkCard />
              </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
