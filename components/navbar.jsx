"use client"

import { Menu } from "lucide-react";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import Link from "next/link";
import { SMNAV } from "./sm-main";
import { useParams, usePathname } from "next/navigation";
import { LGNav } from "./lg-main";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/news`,
      label: 'News',
      active: pathname === `/news`,
    },
    
    {
      href: ``,
      label: 'Videos',
      active: pathname === ``,
    },
    {
      href: `/`,
      label: 'Offers',
      active: pathname === ``,
    },
    {
      href: ``,
      label: 'Competition',
      active: pathname === ``,
    },
  ]

  return (
    <div className={` bg-[#022FF8] ${menuOpen ? 'h-auto pb-3' : " h-16"} lg:h-16  dark:bg-slate-700 border-b`}>
      <div className="flex">
        <div className="lg:hidden text-white p-5">
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <Link href='/'>
          <div className="group5 w-[156.94px] h-[53.3px] absolute  ms-[50px] mt-1 flex text-center items-center sm:hidden ">
            <svg className="group4" width={29} height={32} viewBox="0 0 51 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.5703 14.3098H39.8193L17.12 39.0547H11.0127L34.5703 14.3098Z" fill="#D9D9D9" fillOpacity="0.3" />
              <path d="M10.5288 19.2665L29.8839 0H50.0047L11.0128 39.0545L9.07564 36.3281C5.3254 31.05 5.93998 23.8343 10.5288 19.2665Z" fill="white" />
              <path d="M40.2831 34.0554L20.9481 53.3019H0.827286L39.8192 14.3099L41.7171 16.9669C45.4878 22.2458 44.8808 29.4788 40.2831 34.0554Z" fill="white" />
            </svg>
            <span className="sCORECAST font-['Clash_Display'] text-[14.828347206115723px] font-medium text-neutral-100 text-center tracking-[0px]">SPORTSBIZZ</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        {
          menuOpen && <SMNAV className="ms-2" routes={routes} />
        }
      </div>
      <div className="flex lg:h-16  items-center container justify-between ">
      
           <div className="lg:block hidden rectangle16 w-[249.33px] h-[85px] relative opacity-100 p-0 rounded-[13.222223281860352px]" />
          
       
        <div className="group5 w-[202.94px] h-[53.3px]  absolute p-0 lg:block hidden">
          <Link href='/'>
            <div className="flex items-center">
              <svg className="group4" width={51} height={54} viewBox="0 0 51 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.5703 14.3098H39.8193L17.12 39.0547H11.0127L34.5703 14.3098Z" fill="#D9D9D9" fillOpacity="0.3" />
                <path d="M10.5288 19.2665L29.8839 0H50.0047L11.0128 39.0545L9.07564 36.3281C5.3254 31.05 5.93998 23.8343 10.5288 19.2665Z" fill="white" />
                <path d="M40.2831 34.0554L20.9481 53.3019H0.827286L39.8192 14.3099L41.7171 16.9669C45.4878 22.2458 44.8808 29.4788 40.2831 34.0554Z" fill="white" />
              </svg>
              <span className="sCORECAST font-['Clash_Display'] text-[23.638450622558594px] font-medium text-neutral-100 text-center tracking-[0px]">SPORTSBIZZ</span>
            </div>
          </Link>
        </div>
        <div className="lg:block hidden">
          <LGNav className="me-5" routes={routes} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;