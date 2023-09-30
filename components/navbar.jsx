

import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";


const Navbar =  () => {
  

  return ( 
    <div className=" bg-[#022FF8]  dark:bg-slate-700 border-b">
      <div className="flex h-16 items-center px-4">
        
        <MainNav className="mx-6" />
        
      </div>
    </div>
  );
};

export default Navbar;