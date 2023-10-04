"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

export function LGNav({
  routes,
  className,
  ...props
}) {
  return (
    <div className=" p-0">
    <nav
      className={cn("flex lg:flex-row sm:flex-col items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : ' text-white'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
    
</div>
  )
};