"use client"

import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FilterButtons = () => {
    const pathname = usePathname();
    const params = useParams();
    const routes = [
        {
            href: `/`,
            label: 'Live',
            active: pathname === `/`,
        },
        {
            href: `/upcoming`,
            label: 'Upcoming',
            active: pathname === `/upcoming`,
        },
        {
            href: `/finished`,
            label: 'Finished',
            active: pathname === `/finished`,
        },
      


    ]
    return (
        <div className=" flex justify-center space-x-2  mt-5 items-center">

            {routes.map((route) => (
                <Link key={route.href}
                        href={route.href}>
                <Button className={cn(
                    'text-sm font-medium transition-colors hover:text-white',
                    route.active ? 'bg-[#FF6621] ' : 'bg-[#FFFFFF] text-black '
                )}>
                    
                        {route.label}
                   
                </Button>
                </Link>
            ))}
        </div>
    );
}

export default FilterButtons;