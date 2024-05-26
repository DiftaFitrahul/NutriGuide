import FoodContentComp from "@/components/FoodContectComp";
import HeaderComp from "@/components/HeaderComp";
import HistoryComp from "@/components/HistoryComp";
import TrendingComp from "@/components/TrendingComp";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState, useRef } from "react";
import { Sidebar } from "react-feather";
import ProfileSection from "./profile";
import RecomenderSection from "./recomender";
import BookmarkSection from "./bookmark";
import { useRouter } from "next/navigation";
import { LoadingContext } from "@/context/LoadingContext";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import lottie from "lottie-web";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [trending, setTrending] = useState([]);
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/load_animation4.json",
    });
    console.log("Cookies : " + Cookies.get("Auth"));
    if (Cookies.get("Auth") === undefined) {
      toast.error("Anda belum login!", {
        zIndex: 9999,
      });
      setInterval(() => {
        window.location.href = "/auth/login";
        setIsLoading(false);
      }, 1000);
    } else {
      getTrending();
    }
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []);

  const getTrending = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/trending")
      .then((res) => {
        toast.success("Sukses Mendapatkan data Trending", {
          zIndex: 9999,
        });
        setTrending(res.data.trending);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Gagal mendapatkan data Trending", {
          zIndex: 9999,
        });
        setIsLoading(false);
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
        <HeaderComp title={"Home"} />
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
                <p className="pl-[7px] font-bold">Home</p>
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
                <p className={`pl-[7px] }`}>Recomender</p>
              </button>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  router.replace("/bookmark");
                }}
              >
                <Image
                  src={"/bookmark_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className={`pl-[7px] }`}>Bookmark</p>
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
              <div className="flex flex-auto flex-col w-[50px] h-full  overflow-auto">
                <p className="font-bold text-black font-serif mt-10 text-center text-4xl">
                  Selamat Datang Di Recomender Food
                </p>
                <div
                  className="w-[400px] self-center mt-[50px]"
                  ref={animationContainer}
                ></div>
                <p className="text-black mx-5 mt-8 text-lg">
                  <l className="ml-10 text-lg">Recomender</l> food web app
                  merupakan website rekomender makanan dalam bentuk chat dengan
                  response berupa gambar ilustrasi makanan beserta bahan dan
                  step untuk membuatnya. User dapat meminta resep makanan apapun
                  dan data riwayat prompt user akan disimpan. User juga dapat
                  bookmark prompt apabila dirasa prompt tersebut penting dan
                  suatu saat ingin menggunakannya lagi. Silahkan mencoba dan
                  menggunakan website ini dengan bijak dan benar. Terima kasih
                  :)
                </p>
              </div>
              <div className="flex flex-col flex-1 max-w-[370px] min-w-[200px]  ">
                <h1 className="font-semibold text-black py-[10px] ml-[40px] mt-[20px]">
                  Trending
                </h1>
                <div className="flex flex-col h-3/6 w-[150px] md:w-[250px] px-[10px]  ml-[20px] lg:ml-[40px]  rounded-3xl border border-black border-opacity-50 overflow-auto">
                  {trending.map((message, index) => (
                    <TrendingComp
                      title={message.title}
                      onClickMenu={() => {
                        router.push({
                          pathname: "/detail/trending",
                          query: message,
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
