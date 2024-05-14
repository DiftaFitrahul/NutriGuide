import BookmarkCard from "@/components/BookmarkCardComp";
import FoodContentComp from "@/components/FoodContectComp";
import TrendingComp from "@/components/TrendingComp";

export default function BookmarkSection() {
  return (
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
  );
}
