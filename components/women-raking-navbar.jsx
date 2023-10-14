"use client"

import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RankingNavbar = () => {
    const pathname = usePathname();
    const params = useParams();
    const routes = [
        {
            href: `/women-ranking/batting`,
            label: 'Batting',
            active: pathname === `/women-ranking/batting`,
        },
        {
            href: `/women-ranking/bowling`,
            label: 'Bowling',
            active: pathname === `/women-ranking/bowling`,
        },
        {
            href: `/women-ranking/all-rounders`,
            label: 'All Rounders',
            active: pathname === `/women-ranking/all-rounders`,
        },
        {
            href: `/women-ranking/teams`,
            label: 'Teams',
            active: pathname === `/women-ranking/teams`,
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

export default RankingNavbar;