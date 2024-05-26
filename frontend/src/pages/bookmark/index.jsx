import FoodContentComp from "@/components/FoodContectComp";
import HistoryComp from "@/components/HistoryComp";
import Head from "next/head";
import HeaderComp from "@/components/HeaderComp";
import Image from "next/image";
import BookmarkCard from "@/components/BookmarkCardComp";
import { toast } from "react-toastify";

import TrendingComp from "@/components/TrendingComp";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import Cookies from "js-cookie";
import axios from "axios";

export default function Bookmark() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [bookmarks, setBookmarks] = useState([]);

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
      getBookmarks();
    }
  }, []);

  const getBookmarks = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/bookmark", {
        params: {
          user_id: localStorage.getItem("user_id"),
        },
      })
      .then((res) => {
        setBookmarks(res.data.bookmarks);
        setIsLoading(false);
        toast.success("Sukses mendapatkan data bookmarks!!", {
          zIndex: 9999,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Gagal mendapatkan data bookmarks!!", {
          zIndex: 9999,
        });
      });
  };

  const deleteBookmark = (history_id) => {
    axios
      .delete(process.env.NEXT_PUBLIC_BACKEND_URL + "/bookmark", {
        params: {
          history_id: history_id,
          user_id: localStorage.getItem("user_id"),
        },
      })
      .then((res) => {
        toast.success("Sukses menghapus data bookmarks!!", {
          zIndex: 9999,
        });
        setIsLoading(true);
        getBookmarks();
      })
      .catch((err) => {
        toast.error("Gagal menghapus data bookmarks!!", {
          zIndex: 9999,
        });
      });
  };

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
              <div className="flex-auto grid items-start  max-[900px]:grid-cols-1 max-[1250px]:grid-cols-2 max-[1550px]:grid-cols-3 max-[1800px]:grid-cols-4 grid-cols-5 overflow-auto padding-10 place-items-center gap-5 mt-10">
                {bookmarks.map((message, index) => (
                  <BookmarkCard
                    key={index}
                    title={message.prompt}
                    imageUrl={message.image_url}
                    date={message.created_on}
                    onDeleteBookmark={() => {
                      deleteBookmark(message.id);
                    }}
                    onClickBookmark={() => {
                      router.push({
                        pathname: "/detail/history",
                        query: message,
                      });
                    }}
                  />
                ))}
              </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
