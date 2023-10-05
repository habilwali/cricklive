"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

export function SMNAV({
  routes,
  className,
  ...props
}) {
  const pathname = usePathname();
  



  return (
    <div className=" p-0">
    <nav
      className={cn("grid grid-cols-2 gap-x-5 gap-y-3 mt-0 ", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? ' font-extrabold text-md text-white dark:text-white' : ' text-white'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
    
</div>
  )
};