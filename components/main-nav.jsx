"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}) {
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
    <div className="container p-0">

   
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black ' : ' text-white'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
    
</div>
  )
};