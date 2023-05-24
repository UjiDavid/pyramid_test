import Image from 'next/image';
import Form from './components/Form';

export default function Home() {
  return (
    <main className="flex w-[1366px] h-[768px]">
      <div className="p-3 gap-8 flex flex-col w-[627px] h-full items-center justify-center bg_gradient">
        <h1 className="text-white text-center font-semibold text-2xl w-[70%] mx-auto">
          Social media shared today, tomorrow or by location
        </h1>
        <div className="bg_gradient1 w-[494px] items-center justify-center h-[494px] rounded-full">
          <Image
            src="/assets/phones.png"
            className="m-auto"
            width={350}
            height={700}
            alt="phones"
          />
        </div>
        <div className="flex flex-row items-center justify-center mx-auto gap-2">
          <div className="w-[10px] h-[10px] border-2 border-solid rounded-full border-white"></div>
          <div className="border-r-2 border-solid p-1 rounded-full border-white">
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          </div>
          <div className="w-[10px] h-[10px] border-2 border-solid rounded-full border-white"></div>
        </div>
      </div>
      <div className="flex flex-col m-8 gap-4 mx-20 w-[739px] h-[768px] bg-white">
        <div className="flex flex-row gap-3">
          <Image src="/assets/logo.png" width={45} height={45} alt="logo" />
          <h2 className="font-semibold my-auto text-[18px]">Capzul</h2>
        </div>
        <div className="flex flex-col mt-3 gap-3">
          <h2 className="text-bold text-[24px]">Create account</h2>
          <p>For business, band or celebrity.</p>
        </div>
        <Form />
        <p className="text-md text-center mx-auto">
          Already have an account? <span className="cursor-pointer text-[#007AFF]">Log In</span>
        </p>
        <div className="flex flex-row gap-3 mt-14">
          <Image
            src="/assets/App_Store.png"
            className="cursor-pointer"
            width={135}
            height={40}
            alt="apple store"
          />
          <Image
            src="/assets/Google_Play.png"
            className="cursor-pointer"
            width={135}
            height={40}
            alt="google play store"
          />
        </div>
      </div>
    </main>
  );
}
