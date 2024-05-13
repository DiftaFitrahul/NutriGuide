import FoodContentComp from "@/components/FoodContectComp";
import TrendingComp from "@/components/TrendingComp";

export default function BookmarkSection() {
  return (
    <>
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
      </div>
    </>
  );
}
