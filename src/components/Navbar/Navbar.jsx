"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-[#0F1624] sticky top-0 z-30">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">A.U.portfolio</h1>

         
          <div className="hidden md:flex gap-10 text-xl">
            <Link href="#About" className="hover:text-amber-500 transition duration-300 hover:scale-110">
              About me
            </Link>
            <Link href="#Skills" className="hover:text-amber-500 transition duration-300 hover:scale-110">
              Skill & Tools
            </Link>
            <Link href="#Projects" className="hover:text-amber-500 transition duration-300 hover:scale-110">
              Projects
            </Link>
            <Link href="#Footer" className="hover:text-amber-500 transition duration-300 hover:scale-110">
              Contact me
            </Link>
          </div>

       
          <div className="md:hidden z-40">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

   
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-20"
        />
      )}

    
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-[#0F1624] text-white z-30 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 text-lg">
          <Link href="#About" onClick={closeMenu} className="block hover:text-amber-500">About me</Link>
          <Link href="#Skills" onClick={closeMenu} className="block hover:text-amber-500">Skill & Tools</Link>
          <Link href="#Projects" onClick={closeMenu} className="block hover:text-amber-500">Projects</Link>
          <Link href="#Footer" onClick={closeMenu} className="block hover:text-amber-500">Contact me</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
