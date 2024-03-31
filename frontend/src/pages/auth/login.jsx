import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className=" flex flex-col justify-center items-center h-screen w-screen bg-[url('../../public/bg.png')] bg-cover relative">
          <form
            onSubmit={(e) => {}}
            className="items-center p-[50px] bg-black bg-opacity-[.38] rounded-xl"
          >
            <h1 className="text-center text-[40px] font-semibold">Sign In</h1>
            <p className="text-grey-custom text-[13px] mt-[40px]">Email</p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/email_icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type="email"
                className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[270px]  border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none bg-transparent   placeholder-white"
                placeholder="Enter your email address"
                value={""}
                onChange={(e) => {}}
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">Password</p>
            <div className="relative w-[calc(60vw)] sm:w-full">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/lock_icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type={"password"}
                className="pl-7 pr-4 py-2   w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px]  border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   bg-transparent   placeholder-white "
                placeholder="Enter your password"
                value={""}
                onChange={(e) => {}}
              />
              <button type="button" onClick={() => {}}>
                <span className="absolute inset-y-0 right-0 flex items-center ">
                  <Image
                    src={"/eye_invisible.png"}
                    alt="email"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>

            <div className="relative mt-[10px] w-[calc(60vw)] sm:w-full">
              <Link
                href=""
                className="absolute inset-y-0 right-0 flex items-center "
              >
                <p className="text-white text-[12px]">Forgot password ?</p>
              </Link>
            </div>
            <div className="flex justify-center items-center w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px] ">
              <button
                type="submit"
                className=" bg-rose-500 text-white w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px]  mt-[50px] bg-primary-blue py-2  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
