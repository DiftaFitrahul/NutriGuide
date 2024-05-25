import Image from "next/image";
export default function BookmarkCard() {
  //   const IDR = new Intl.NumberFormat("id-ID", {
  //     style: "currency",
  //     currency: "IDR",
  //   });
  //   const maxLengthTitle = 17;
  //   const trimmedTitle =
  //     title.length > maxLengthTitle
  //       ? `${title.slice(0, maxLengthTitle)}...`
  //       : title;

  //   const maxLengthSubtitle = 100;
  //   const trimmedSubtitle =
  //     subtitle.length > maxLengthSubtitle
  //       ? `${subtitle.slice(0, maxLengthSubtitle)}...`
  //       : subtitle;

  return (
    <div className="flex flex-col max-[350px]:w-[100px] max-[500px]:w-[170px] max-[600px]:w-[200px] w-[270px] shadow-xl bg-white rounded-3xl ">
      <Image
        src={"/Data_contoh.png"}
        alt="coba"
        width={300}
        height={200}
        unoptimized={true}
        objectFit="cover"
        className="self-center  rounded-xl min-h-[200px] max-h-[200px]"
      />
      <div className="flex flex-row items-start mt-4 mx-3 mb-3">
        <div className="flex flex-col items-start ">
          <p className="text-black font-bold text-[17px]">
            Nasi gorang yang lezat dan nikmat
          </p>
          <p className="text-black  text-[15px]">kalorinya 110</p>
        </div>
        <button className="ml-[10px]">
          <Image
            src={"/bookmark_icon.png"}
            alt="coba"
            width={40}
            height={40}
            unoptimized={true}
          />
        </button>
      </div>
    </div>
  );
}
