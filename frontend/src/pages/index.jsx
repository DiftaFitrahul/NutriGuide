import FoodContentComp from "@/components/FoodContectComp";
import HeaderComp from "@/components/HeaderComp";
import HistoryComp from "@/components/HistoryComp";
import TrendingComp from "@/components/TrendingComp";
import Head from "next/head";
import Image from "next/image";
import { use, useState } from "react";
import { Sidebar } from "react-feather";
import HomeSection from "./home/home_section";
import ProfileSection from "./profile/profile_section";
import RecomenderSection from "./recomender/recomender_section";
import BookmarkSection from "./bookmark/bookmark_section";

const SidebarItem = {
  HOME: "Home",
  PROFILE: "Profile",
  RECOMENDER: "Recomender",
  BOOKMARK: "Bookmark",
};

export default function Home() {
  const [selectedSidebar, setSelectedSidebar] = useState(SidebarItem.HOME);
  const [currentMainPage, setCurrentMainPage] = useState(<HomeSection />);

  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title={selectedSidebar} />
        <div className="flex flex-col justify-center items-center bg-white min-w-full min-h-screen ">
          <div className="flex flex-row justify-between bg-blue-50 w-full h-screen pt-[70px]">
            <div className="flex-1 flex flex-col pl-[20px] items-start min-w-[160px] max-w-[300px]  border-r-2 border-gray">
              <h1 className="text-black font-bold pb-[10px] text-2xl pt-[30px]">
                Menu
              </h1>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  setSelectedSidebar(SidebarItem.HOME);
                  setCurrentMainPage(<HomeSection />);
                }}
              >
                <Image
                  src={"/home_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p
                  className={`pl-[7px] ${
                    selectedSidebar === SidebarItem.HOME ? "font-bold" : ""
                  }`}
                >
                  Home
                </p>
              </button>

              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  setSelectedSidebar(SidebarItem.PROFILE);
                  setCurrentMainPage(<ProfileSection />);
                }}
              >
                <Image
                  src={"/profile_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p
                  className={`pl-[7px] ${
                    selectedSidebar === SidebarItem.PROFILE ? "font-bold" : ""
                  }`}
                >
                  Profile
                </p>
              </button>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  setSelectedSidebar(SidebarItem.RECOMENDER);
                  setCurrentMainPage(<RecomenderSection />);
                }}
              >
                <Image
                  src={"/recomender_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p
                  className={`pl-[7px] ${
                    selectedSidebar === SidebarItem.RECOMENDER
                      ? "font-bold"
                      : ""
                  }`}
                >
                  Recomender
                </p>
              </button>
              <button
                className=" flex flex-row items-center text-black text-lg pb-[7px]"
                onClick={() => {
                  setSelectedSidebar(SidebarItem.BOOKMARK);
                  setCurrentMainPage(<BookmarkSection />);
                }}
              >
                <Image
                  src={"/bookmark_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p
                  className={`pl-[7px] ${
                    selectedSidebar === SidebarItem.BOOKMARK ? "font-bold" : ""
                  }`}
                >
                  Bookmark
                </p>
              </button>
              <div className="h-full"></div>
              <div className="text-black text-lg pb-[30px]">Username</div>
            </div>
            {currentMainPage}
            {/* 
            <div className="flex flex-auto flex-col w-[50px] h-full  overflow-auto">
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
              <FoodContentComp />
            </div>
            <div className="flex flex-col flex-1 max-w-[370px] min-w-[200px]  ">
              <h1 className="font-semibold text-black py-[10px] ml-[40px] mt-[20px]">
                Trending
              </h1>
              <div className="flex flex-col h-3/6 w-[150px] md:w-[250px] px-[10px]  ml-[20px] lg:ml-[40px]  rounded-3xl border border-black border-opacity-50 overflow-auto">
                <TrendingComp
                  onClickMenu={(data) => {
                    console.log("makan nasi " + data);
                  }}
                />
                <TrendingComp />
                <TrendingComp />
                <TrendingComp />
                <TrendingComp />
                <TrendingComp />
              </div>
              {selectedSidebar === SidebarItem.RECOMENDER && (
                <>
                  <h1 className="font-semibold text-black py-[10px] ml-[40px] mt-[10px]">
                    History
                  </h1>
                  <div className="flex flex-col h-2/6 w-[150px] md:w-[250px] px-[10px]  ml-[20px] lg:ml-[40px]  rounded-3xl border border-black border-opacity-50 overflow-auto">
                    <HistoryComp />
                    <HistoryComp />
                    <HistoryComp />
                    <HistoryComp />
                    <HistoryComp />
                    <HistoryComp />
                    <HistoryComp />
                  </div>
                </>
              )}
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
