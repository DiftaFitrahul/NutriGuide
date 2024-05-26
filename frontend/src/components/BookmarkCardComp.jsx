import Image from "next/image";
import React from "react";

export default function BookmarkCard({
  title,
  imageUrl,
  date,
  onDeleteBookmark,
  onClickBookmark,
}) {
  // Parse the string into a Date object
  const newDate = new Date(date);

  // Manually adjust the date to the Indonesian time zone (UTC+7)
  const offset = newDate.getTimezoneOffset() * 60000; // Get local timezone offset in milliseconds
  const indonesianTime = new Date(newDate.getTime() + offset); // Adjust for UTC+7

  // Format the date as desired for Indonesian locale
  const formattedDate = indonesianTime.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long", // 'short' for abbreviated month name
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="flex flex-col max-[350px]:w-[100px] max-[500px]:w-[170px] max-[600px]:w-[200px] w-[270px] shadow-xl bg-white rounded-3xl "
      onClick={onClickBookmark}
    >
      <Image
        src={imageUrl}
        alt="image"
        width={300}
        height={200}
        unoptimized={true}
        objectFit="cover"
        className="self-center  rounded-xl min-h-[200px] max-h-[200px]"
      />
      <div className="flex flex-row items-start mt-4 mx-3 mb-3">
        <div className="flex flex-col items-start ">
          <p className="text-black font-bold text-[17px] truncate-2-lines">
            {title}
          </p>
          <p className="text-black  text-[15px]">{formattedDate}</p>
        </div>
        <button
          className="ml-[10px] flex-shrink-0"
          onClick={() => {
            onDeleteBookmark();
          }}
        >
          <Image
            src={"/trash_icon.png"}
            alt="coba"
            width={25}
            height={25}
            unoptimized={true}
          />
        </button>
      </div>
    </div>
  );
}
