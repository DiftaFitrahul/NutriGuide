import HeaderComp from "@/components/HeaderComp";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function detailHistory() {
  const router = useRouter();
  const dataHistory = router.query;
  const newDate = new Date(dataHistory.created_on);

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
  const newText = dataHistory?.response
    ?.split("\n")
    .map((str, index) => <p key={index}>{str}</p>);

  console.log(dataHistory);
  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title={"Detail History"} />
        <div className="flex flex-col justify-center items-center bg-white min-w-full min-h-screen px-5 py-5">
          <div className="flex self-end  w-1/2 py-2 px-3 bg-slate-100 border border-gray-300 rounded-lg  text-black mb-2 mt-[100px] overflow-auto">
            {dataHistory.prompt}
          </div>
          <div className="flex-1 flex-col w-full p-2 bg-blue-50 border border-gray-300 rounded-lg  text-black overflow-auto">
            <img src={dataHistory.image_url} className="w-[300px]" />
            <div>{newText}</div>
            <p className="font-semibold mt-5">
              {"Dibuat : " + formattedDate} WIB
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
