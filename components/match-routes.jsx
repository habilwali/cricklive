"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }) {
  const pathname = usePathname();
  const params = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/news`,
      label: 'News',
      active: pathname === `/news`,
    },
    {
      href: `/videos`,
      label: 'Videos',
      active: pathname === `/videos`,
    },
    {
      href: `/offers`,
      label: 'Offers',
      active: pathname === `/offers`,
    },
    {
      href: `/competition`,
      label: 'Competition',
      active: pathname === `/competition`,
    },
  ];

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 md:p-0">
      <div className="flex items-center justify-between">
        <button
          onClick={handleToggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <nav
          className={cn(
            "md:flex md:items-center md:justify-start",
            menuOpen ? "block" : "hidden"
          )}
          {...props}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'block mt-4 text-sm font-medium transition-colors hover:text-primary',
                route.active ? 'text-black ' : 'text-white'
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
