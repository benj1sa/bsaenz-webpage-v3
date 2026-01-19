"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavigationLink[];
  siteName?: string;
}

export function Navigation({ links, siteName = "Benjamin Saenz" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerBottom, setHeaderBottom] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const updateHeaderBottom = () => {
        const rect = headerRef.current!.getBoundingClientRect();
        setHeaderBottom(rect.bottom);
      };
      
      updateHeaderBottom();
      window.addEventListener('resize', updateHeaderBottom);
      window.addEventListener('scroll', updateHeaderBottom);
      
      return () => {
        window.removeEventListener('resize', updateHeaderBottom);
        window.removeEventListener('scroll', updateHeaderBottom);
      };
    }
  }, []);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Close menu when viewport reaches md breakpoint (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Check on mount in case viewport is already md or larger
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <section 
        ref={headerRef}
        className="flex justify-between items-center md:my-[50px] my-[20px] relative z-50 bg-background transition-colors"
      >
        <div className="font-medium text-lg text-black">
          <Link href="/">{siteName}</Link>
        </div>
        
        {/* Desktop Navigation Links - shown on md+ */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-black hover:cursor-pointer relative pb-1 border-b-1 border-transparent hover:border-black transition-colors duration-200 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button - hidden on md+ */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-12 h-12 rounded-md transition-colors hover:cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-8 bg-foreground -translate-x-1/2 origin-center transition-all duration-300 ease-in-out ${
              isOpen
                ? "translate-y-0 rotate-45"
                : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-8 bg-foreground -translate-x-1/2 origin-center transition-all duration-300 ease-in-out ${
              isOpen
                ? "translate-y-0 -rotate-45"
                : "translate-y-1.5"
            }`}
          />
        </button>
      </section>

      {/* Sliding Menu - starts below header, hidden on md+ */}
      <div
        className={`md:hidden fixed mt-12 left-0 right-0 bg-white z-40 overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen 
            ? "opacity-100" 
            : "opacity-0"
        }`}
        style={{
          top: `${headerBottom}px`,
          maxHeight: isOpen ? `calc(100vh - ${headerBottom}px)` : '0',
        }}
      >
        <div className="flex flex-col min-h-screen">
          {/* Navigation Links */}
          {links.map((link, index) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block my-4 px-6 text-2xl italic font-light font-(family-name:--font-crimson-pro) text-black hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
              <div className="border-t border-gray-200 mx-6" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
