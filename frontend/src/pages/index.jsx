import HeaderComp from "@/components/HeaderComp";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Nutriguide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeaderComp title="Home" />
        <div className="flex flex-col justify-center items-center bg-white min-w-full min-h-screen">
          <div className="block md:flex justify-between w-full h-full ">
            Halo bang disini
          </div>
        </div>
      </main>
    </>
  );
}
