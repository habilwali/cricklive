"use client"

import { Menu } from "lucide-react";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import Link from "next/link";
import { SMNAV } from "./sm-main";
import { useParams, usePathname } from "next/navigation";
import { LGNav } from "./lg-main";


const Navbar =  () => {
  
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
      href: ``,
      label: 'News',
      active: pathname === ``,
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
    <div className={` bg-[#022FF8] ${menuOpen ? 'h-auto pb-3' : "h-16"} lg:h-16  dark:bg-slate-700 border-b`}>
       <div className="lg:hidden text-white p-5">
         <Menu onClick={()=> setMenuOpen(!menuOpen)}/>
        </div>
        <div className="flex items-center justify-center ">

      
        {
          menuOpen &&  <SMNAV className="ms-2" routes={routes}/>
        }
          </div>
       
      <div className="flex lg:h-16  items-center container justify-between ">
       
     
       
        <div className="lg:block hidden">
        <LGNav className="me-5" routes={routes} />
        </div>
        
        
      </div>
    </div>
  );
};

export default Navbar;