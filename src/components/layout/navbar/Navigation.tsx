import { cn } from "@/lib/utils";
import React from "react";
import NavLinks from "./NavLinks";

export interface NavigationProps {
  className?: string;
}

export const navLinksData = [
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/summer-tee", label: "Summer T-Shirt" },
  { href: "/oversized-tee", label: "Oversized T-Shirt" },
];

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <div className="">
      <div
        className={cn(
          "sm:flex hidden items-start justify-center space-x-6 flex-row font-bold",
          className
        )}
      >
        {navLinksData.map((link, index) => (
          <NavLinks
            href={link.href}
            label={link.label}
            key={index}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
