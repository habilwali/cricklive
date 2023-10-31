"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Button } from "./ui/button";
import { HomeIcon, VideotapeIcon } from "lucide-react";

export function SMNAV({
  routes,
  className,
  toggleModal,
  ...props
}) {
  const pathname = usePathname();




  return (
    <div className=" p-0">
      <nav
        className={cn("grid grid-cols-1 gap-x-5 gap-y-3 mt-0 ", className)}
        {...props}
      >
        {routes.map((route, index) => (
          <>

            <Link
              onClick={toggleModal}
              key={index}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary flex gap-3 text-md mt-4 ',
                route.active ? ' font-extrabold text-md text-white' : ' text-white'
              )}
            >
              {route.Icon}
             

              {route.label}
            </Link>
          </>
        ))}
      </nav>

    </div>
  )
};