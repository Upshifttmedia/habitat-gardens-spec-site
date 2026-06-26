import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-wheat">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-fraunces italic text-2xl text-wheat">Habitat Gardens</p>
            <p className="font-worksans font-light text-wheat-dim/70 text-sm mt-2">
              Santa Cruz, California
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
            {[
              { href: "/work", label: "Work" },
              { href: "/about", label: "About" },
              { href: "/process", label: "Process" },
              { href: "/contact", label: "Begin" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-worksans font-bold uppercase tracking-[0.12em] text-sm text-wheat/70 hover:text-wheat transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="font-worksans font-light text-wheat-dim/70 text-sm space-y-1">
            <p>(831) 359-7918</p>
            <p>brett@habitat-gardens.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-amber/30">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="font-worksans font-light text-wheat-dim/50 text-sm">
            © 2026 Habitat Gardens · Santa Cruz, California
          </p>
        </div>
      </div>
    </footer>
  );
}
