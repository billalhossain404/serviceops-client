"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Menu, X } from "lucide-react"

const navigation = [
  { label: "Browse Jobs", href: "#jobs" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full px-5 py-5 sm:px-8 lg:px-10">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-[1036px] rounded-[9px] border border-white/20 bg-[#0f110c] px-5 py-3.5 text-white shadow-[0_0_24px_rgba(255,255,255,0.03)] sm:px-6"
      >
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="ServiceOps home"
            className="flex shrink-0 items-center gap-3 text-[24px] font-semibold tracking-[-0.06em] transition-opacity hover:opacity-80"
          >
            <span className="flex size-12 items-center justify-center rounded-[5px] text-[#CC6600]">
              <BriefcaseBusiness aria-hidden="true" size={40} strokeWidth={2} />
            </span>
            <span>
              Service<span className="text-[#CC6600]">Ops</span>
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-2 text-[15px] font-semibold transition-colors hover:text-[#CC6600] ${
                  index === 0 ? "text-[#CC6600]" : "text-white"
                }`}
              >
                {item.label}
                {index === 0 && (
                  <span className="absolute inset-x-1 -bottom-1 h-1 rounded-full bg-[#CC6600]" />
                )}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/sign-in"
              className="rounded-[9px] border border-white/20 px-5 py-2.5 text-[15px] font-semibold transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Sign In
            </a>
            <a
              href="/get-started"
              className="flex items-center gap-2 rounded-[9px] bg-[#CC6600] px-5 py-2.5 text-[15px] font-semibold text-black transition-colors hover:bg-[#CC6600]/90"
            >
              Get Started
              <ArrowRight aria-hidden="true" size={19} strokeWidth={2.5} />
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-white/15 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-white/10 ${
                    index === 0 ? "text-[#CC6600]" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/15 pt-4 sm:flex-row">
              <a
                href="/sign-in"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-[9px] border border-white/20 px-5 py-2.5 text-center text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Sign In
              </a>
              <a
                href="/get-started"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-[9px] bg-[#CC6600] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#ffc04a]"
              >
                Get Started
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar