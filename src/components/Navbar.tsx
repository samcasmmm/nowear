"use client";
import React, { useState } from "react";
import Icon from "@/components/Icon";
import { Baby, Search, ShoppingBag, ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavigationLinks from "@/components/navbar/Navigation";

type Props = {};

const navLinks = [
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/summer-tee", label: "Summer T-Shirt" },
  { href: "/oversized-tee", label: "Oversized T-Shirt" },
];

const BrandLogo = () => (
  <Link href={"/"}>
    <Image
      src={"/images/logo_light.png"}
      alt="Logo"
      width={120}
      height={100}
      className="cursor-pointer"
    />
  </Link>
);

type NavLinksProps = { href: string; label: string; className?: string };
const NavLinks: React.FC<NavLinksProps> = ({ href, label, className }) => (
  <Link
    href={href}
    className={cn(
      "hover:opacity-100 opacity-60 transition-opacity duration-300",
      className,
    )}
  >
    {label}
  </Link>
);

const SearchBar: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "border flex items-center justify-center flex-row p-2 rounded-sm",
      className,
    )}
  >
    <Icon name="Search" />
    <input type="text" className=" outline-none pl-2 w-full h-full" />
  </div>
);

const Navbar = (props: Props) => {
  return (
    <Sheet>
      <div className="border-b border-b-gray-100 flex items-center justify-center px-3 relative">
        <div className="fluid flex items-center justify-around py-5">
          <div className="flex items-center justify-between md:justify-start p-2 gap-10 font-bold w-4/6">
            <SheetTrigger className="inline-block sm:hidden">
              <Icon name="Menu" />
            </SheetTrigger>
            <BrandLogo />
            <NavigationLinks />
          </div>
          <div className="flex items-center justify-center gap-4 flex-row">
            <SearchBar className="hidden md:flex" />
            <Icon
              name="User"
              className="hover:opacity-100 opacity-60 transition-opacity duration-300"
            />
            <Icon
              name="ShoppingBag"
              className="hover:opacity-100 opacity-60 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <BrandLogo />
          </SheetTitle>
          <SheetDescription className="">
            <div className="flex sm:hidden items-start justify-center space-y-6 flex-col font-bold mt-4">
              {navLinks.map((link, index) => (
                <NavLinks
                  href={link.href}
                  label={link.label}
                  key={index}
                  className="border-b border-black/25 w-full text-left text-AstronautBlue-500 hover:text-AstronautBlue-600"
                />
              ))}
              <div className="flex items-start justify-center w-full space-x-6">
                <div className="flex items-start justify-between flex-col text-left w-full space-y-4">
                  <p className="text-left cursor-pointer font-normal">
                    Track Order
                  </p>
                  <p className="text-left cursor-pointer font-normal">
                    Reviewa
                  </p>
                </div>
                <div className="flex items-start justify-between flex-col w-full space-y-4">
                  <p className="text-left cursor-pointer font-normal">
                    Support
                  </p>
                  <p className="text-left cursor-pointer font-normal">
                    Return & Exchange
                  </p>
                  <p className="text-left cursor-pointer font-normal">
                    Contact Us
                  </p>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
