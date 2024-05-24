import FoodContentComp from "@/components/FoodContectComp";
import HistoryComp from "@/components/HistoryComp";
import Head from "next/head";
import HeaderComp from "@/components/HeaderComp";
import Image from "next/image";
import BookmarkCard from "@/components/BookmarkCardComp";
// import { Image } from "react-image";
import axios from "axios";

import TrendingComp from "@/components/TrendingComp";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Message = ({ prompt, answer }) => {
  const newText = answer.response.split("\n").map((str) => <p>{str}</p>);
  return (
    <div className="flex flex-col w-full my-5 px-3">
      <div className="flex self-end  w-1/2 py-2 px-3 bg-slate-100 border border-gray-300 rounded-lg  text-black mb-2 overflow-auto">
        {prompt}
      </div>
      <div className="flex-1 flex-col  p-2 bg-blue-50 border border-gray-300 rounded-lg  text-black overflow-auto">
        <img src={answer.image_url} className="w-[300px]" />
        <div>{newText}</div>
      </div>
    </div>
  );
};

export default function Recomender() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const latestMessageIndex = messages.length - 1;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        prompt: inputValue,
        answer: {
          response: "Loading...",
        },
      };
      setMessages([...messages, newMessage]);

      // setTimeout(() => {
      //   setMessages((prevMessages) => {
      //     const newarr = [...prevMessages];
      //     const latestMessageIndex = newarr.length - 1; // Get the index of the latest message
      //     newarr[latestMessageIndex] = {
      //       prompt: inputValue,
      //       answer: {
      //         response: "madkmaskdmaskdmaskdmkasdkm\n makan nasi padang",
      //       },
      //     };
      //     return newarr;
      //   });
      // }, 1000);

      axios
        .post("http://localhost:5000/ai", {
          prompt: inputValue,
          user_id: "974ac502-ac7c-4031-960f-b58c48799be8",
        })
        .then((res) => {
          console.log(res);
          setMessages((prevMessages) => {
            const newarr = [...prevMessages];
            const latestMessageIndex = newarr.length - 1; // Get the index of the latest message
            newarr[latestMessageIndex] = {
              prompt: inputValue,
              answer: res.data,
            };
            return newarr;
          });
        })
        .catch((err) => {
          console.log(err);
          setMessages((prevMessages) => {
            const newarr = [...prevMessages];
            const latestMessageIndex = newarr.length - 1; // Get the index of the latest message
            newarr[latestMessageIndex] = {
              prompt: inputValue,
              answer: "Error Happening :(",
            };
            return newarr;
          });
        });
      // Simulating an answer for demonstration purposes

      setInputValue("");
    }
  };
  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title={"Recomender"} />
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
                onClick={() => {}}
              >
                <Image
                  src={"/recomender_icon.png"}
                  alt="email"
                  width={30}
                  height={30}
                />
                <p className="pl-[7px] font-bold">Recomender</p>
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
                <p className="pl-[7px] ">Bookmark</p>
              </button>
              <div className="h-full"></div>
              <div className="text-black text-lg pb-[30px]">Account</div>
            </div>
            <>
              <div className="flex flex-auto flex-col w-[50px] h-full">
                <div className="flex-auto overflow-auto">
                  {messages.map((message, index) => (
                    <Message
                      key={index}
                      prompt={message.prompt}
                      answer={message.answer}
                    />
                  ))}
                </div>
                <div className="w-full flex items-center border border-gray-300 rounded-lg px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                  <textarea
                    className="flex-grow resize-none focus:outline-none px-2 py-1 text-black"
                    placeholder="Input prompt..."
                    onChange={handleInputChange}
                    value={inputValue}
                    rows={1} // Start with a single row
                    onInput={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    onClick={handleSend}
                    className="ml-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  >
                    Send
                  </button>
                </div>
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
              </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
