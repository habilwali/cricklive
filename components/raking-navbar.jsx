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
            href: `/ranking/batting`,
            label: 'Batting',
            active: pathname === `/ranking/batting`,
        },
        {
            href: `/ranking/bowling`,
            label: 'Bowling',
            active: pathname === `/ranking/bowling`,
        },
        {
            href: `/ranking/all-rounders`,
            label: 'All Rounders',
            active: pathname === `/ranking/all-rounders`,
        },
        {
            href: `/ranking/teams`,
            label: 'Teams',
            active: pathname === `/ranking/teams`,
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