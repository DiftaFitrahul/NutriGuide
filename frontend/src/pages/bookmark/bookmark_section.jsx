import BookmarkCard from "@/components/BookmarkCardComp";
import FoodContentComp from "@/components/FoodContectComp";
import TrendingComp from "@/components/TrendingComp";

export default function BookmarkSection() {
  return (
    <>
      <div className="flex flex-auto flex-col w-[50px] h-full  overflow-auto">
        <BookmarkCard />
      </div>
    </>
  );
}
