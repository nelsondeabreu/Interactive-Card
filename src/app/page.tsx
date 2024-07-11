import Image from "next/image";
import bg_main from "../../public/bg-main-desktop.png"
import "./globals.css"

export default function Home() {
  return (
    <main className="flex h-[100vh] w-[100vw] items-center justify-center font-mono font-extrabold tracking-wider">
      <div className="w-[30%] h-[100%] border border-black">
        <Image src={bg_main} alt="iamge main" className="h-[100%] w-[100%]"/>
      </div>

      <div className="w-[70%] h-[100%] flex justify-center items-center">
        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <span className="text-xs">CARDHOLDER NAME</span>
            <input type="text" placeholder="e.g Jane Appleseed" className="border p-1 w-80 rounded outline-none"/>
          </div>

          <div className="flex flex-col">
            <span className="text-xs">CARD NUMBER</span>
            <input type="text" placeholder="e.g 1234 5678 9123 0000" className="border p-1 w-80 rounded outline-none"/>
          </div>

          <ul className="flex gap-4 justify-center items-center">
          <li>
            <span  className="text-xs"> EXP. DATE (MM/YY)</span>
            <div className="flex gap-2">
              <input type="number" className="border p-1 w-20 rounded outline-none" placeholder="MM"/>
              <input type="text" className="border p-1 w-20 rounded outline-none" placeholder="YY"/>
            </div>
          </li>
          <li className="flex flex-col">
            <span className="text-xs">CVC</span>
            <input type="text" className="border p-1 w-[8.5rem] rounded outline-none" placeholder="e.g 123"/>
          </li>
        </ul>
        <button className="w-[100%] bg-violet-950 text-white p-1 rounded mt-6">Confirm</button>
        </div>

      </div>

      <div className="flex flex-col fixed justify-between left-32 top-24 p-4 img_front ">

        <ul className="flex items-center gap-2">
          <li className="w-10 h-10 border rounded-full bg-white"></li>
          <li className="w-5 h-5 border rounded-full"></li>
        </ul>

        <div className="text-white">
          <ul className="flex justify-between text-xl">
            <li>0000</li>
            <li>0000</li>
            <li>0000</li>
            <li>0000</li>
          </ul>
          <ul className="flex justify-between">
            <li>Nelson de Abreu</li>
            <li>00/00</li>
          </ul>
        </div>
      </div>

      <div className="fixed left-56 top-[22rem] img_back">
        <span className="absolute top-[5.5rem] right-12">000</span>
      </div>
    </main>
  );
}
