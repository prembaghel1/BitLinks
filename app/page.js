import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src:"./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   <>
       <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-4 justify-center items-center">
              <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortner in the market</p>
              <p className="px-28 text-center">We are the most straight forward URL shorner in the world. Most of the URL shortners will track you or ask you to give your details for login. We understand your needs. Hence we have created this URL shortner. </p>
               <div className='flex gap-3 justify-start text-white'>
                 <Link href="/shorten"><button className='bg-purple-500 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
                 <Link href="/github"><button className='bg-purple-500 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>GitHub</button></Link>
            </div>
          </div>
          <div className="flex justify-start relative">
             <Image className="mix-blend-darken" src={"/vector.jpg"} alt="An image of Vector" fill={true} />
          </div>
        </section>
       </main>
   </>
  );
}
