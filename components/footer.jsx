import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (

    <footer className="bg-[#0022BA] mt-5 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2">

          <div className="group5 col-span-2 flex justify-center items-center text-center  relative p-0">
            <svg className="group4" width={103} height={111} viewBox="0 0 103 111" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70.0346 29.9974H80.9288L33.8163 81.3556H21.1406L70.0346 29.9974Z" fill="#D9D9D9" fillOpacity="0.3" />
              <path d="M20.1349 40.2853L60.3064 0.297607H102.067L21.1393 81.3553L17.1188 75.6967C9.33512 64.742 10.6107 49.7658 20.1349 40.2853Z" fill="white" />
              <path d="M81.8917 70.9798L41.762 110.926H0.00107574L80.929 29.9979L84.868 35.5125C92.6941 46.4689 91.4343 61.4809 81.8917 70.9798Z" fill="white" />
            </svg>
            <span className="sCORECAST font-['Clash_Display'] text-[53.042476654052734px] font-medium text-neutral-100 text-center tracking-[0px]">SPORTSBIZZ</span>
          </div>

          <div className="group5 col-span-2   items-center text-start  relative p-1">

            <span className="sCORECAST font-['satoshi']  text-lg  font-bold  text-neutral-100 text-center tracking-[0px]">Quick Links</span>

          </div>
          <Separator className=" col-span-2" />
          <div>

            <ul className="text-white dark:text-gray-400 font-sm">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Matches</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Offers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Ranking</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Competition</a>
              </li>
            </ul>

          </div>

          <div>

            <ul className="text-white font-sm">
              <li className="mb-4">
                <a href="#" className="hover:underline">News</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Videos</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Stats</a>
              </li>

            </ul>
          </div>
          <Separator className=" col-span-2" />

          <div className="group5 col-span-2   items-center text-start  relative p-0 mb-0">

            <span className="sCORECAST font-['satoshi']  text-lg  font-bold  text-neutral-100 text-center ">Follow SPORTSBIZZ</span>

          </div>
          <div className="flex m-0 col-span-2 ">
            <div className="ms-2" >
              <Link href="https://www.facebook.com/sportsbizzofficial " className="flex gap-3 items-center " >
                <Image className="rounded-md" src="/images/Facebook.svg" alt="me" width="33" height="33" />
              </Link>
            </div>
            <div className="ms-2" >
              <Link href="https://www.instagram.com/sportsbizz_/ " className="flex gap-3 items-center " >
                <Image className="rounded-md" src="/images/Instagram.svg" alt="me" width="33" height="33" />
              </Link>
            </div>
            <div className="ms-2" >
              <Link href=" https://twitter.com/sportsbizz_ " className="flex gap-3 items-center " >
                <Image className="rounded-md" src="/images/X.svg" alt="me" width="33" height="33" />
              </Link>
            </div>

          </div>

<div className="flex">
  <span className="text-[#FFF] text-muted-foreground">
  <Link href="">Terms of Use</Link> | <Link href="/about">About Us</Link> | <Link href="">Privacy Policy</Link> | <Link href="">Copyright 2023</Link>
  </span>
 
</div>



        </div>
      </div>
    </footer>


  );
}

export default Footer;