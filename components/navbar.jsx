"use client"

import { CircleDashed, CircleDot, Cross, CrossIcon, HomeIcon, Menu, NewspaperIcon, VideotapeIcon } from "lucide-react";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";
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
      Icon: <HomeIcon/>,
      active: pathname === `/`,
    },
    {
      href: `/news`,
      label: 'News',
      Icon:<NewspaperIcon/>,
      active: pathname === `/news`,
    },

    {
      href: `/videos`,
      label: 'Videos',
      Icon:<VideotapeIcon/>,
      active: pathname === `/videos`,
    },
    // {
    //   href: `/offers`,
    //   label: 'Offers',
    //   Icon:<CircleDot/>,
    //   active: pathname === `/offers`,
    // },
    // {
    //   href: ``,
    //   label: 'Competition',
    //   Icon:< CircleDashed/>,
    //   active: pathname === ``,
    // },
  ]

  const handleState = () => {
    setMenuOpen(!menuOpen);
};

useEffect(() => {
 
  if (menuOpen) {
    document.body.classList.add("overflow-y-hidden")
  
  } else {
    document.body.classList.remove("overflow-y-hidden")
  }})

  return (
    <div className={` bg-[#022FF8] ${menuOpen ? 'h-16 pb-3  sticky top-0 z-10  ' : " h-16 "} lg:h-16   `}>
      <div className="flex justify-between   ">
        <div>
          <Link href='/'>
            <div className="group5 w-[156.94px] h-[53.3px] absolute  ms-[10px] mt-1 flex text-center items-center sm:hidden  ">
              <svg className="group4" width={29} height={32} viewBox="0 0 51 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.5703 14.3098H39.8193L17.12 39.0547H11.0127L34.5703 14.3098Z" fill="#D9D9D9" fillOpacity="0.3" />
                <path d="M10.5288 19.2665L29.8839 0H50.0047L11.0128 39.0545L9.07564 36.3281C5.3254 31.05 5.93998 23.8343 10.5288 19.2665Z" fill="white" />
                <path d="M40.2831 34.0554L20.9481 53.3019H0.827286L39.8192 14.3099L41.7171 16.9669C45.4878 22.2458 44.8808 29.4788 40.2831 34.0554Z" fill="white" />
              </svg>
              <span className="sCORECAST font-['Clash_Display'] text-[14.828347206115723px] font-medium text-neutral-100 text-center tracking-[0px]">SPORTSBIZZ</span>
            </div>

          </Link>
        </div>
        <div className="lg:hidden text-white p-5">
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
      <div className={`flex items-start justify-start ${ menuOpen ? 'backdrop-blur-sm bg-black/10 w-100 h-[100vh] overflow-y-hidden ': ""}     `}>
        {
          menuOpen &&
          <div className={`bg-[#022FF8]     sticky top-15   z-10    w-[200px] h-[100%]  p-5 text-start `}>
            <SMNAV className={`ms-2 `} routes={routes} toggleModal={handleState} menuOpen={menuOpen} />
          </div>
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