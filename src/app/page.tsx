"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
export default function SpotlightPreview() {
  const words = [
    {
      text: "Blood",
    },
    {
      text: "Cancer",
    },
    {
      text: "Cell",
    },
    {
      text: "Detection for",
    },
    {
      text: "Laboratories.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "About us",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div className="fixed top-0 z-100 p-5">
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <span className="font-bold">BCCD</span>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
          <span className="font-bold">BCCD</span>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
 
      {/* Navbar */}
    </div>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          BCCD
        </h1>
        <div className="flex justify-center items-center">
        <TypewriterEffectSmooth words={words} />
        </div>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Blood cancer cell detection uses advanced image analysis and AI to identify abnormal cells in blood samples.
          This helps laboratories quickly and accurately diagnose leukemia and related disorders for early treatment.
        </p>
      </div>
      <div>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Get Started
      </Button>
      </div>
    </div>
  );
}


