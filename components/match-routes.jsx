"use client"

import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MatchDetailsRoutes = () => {
    const pathname = usePathname();
    const params = useParams();
    const routes = [
        {
            href: `/${params.matchId}/scorecard`,
            label: 'Scorescard',
            active: pathname === `/${params.matchId}/scorecard`,
        },
        {
            href: `/${params.matchId}/squads`,
            label: 'Squads',
            active: pathname === `/${params.matchId}/squads`,
        },
        {
            href: `/${params.matchId}/commentry`,
            label: 'Commentry',
            active: pathname === `/${params.matchId}/commentry`,
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


export default MatchDetailsRoutes;