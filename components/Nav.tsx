"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/workbook", label: "Workbook" },
  { href: "/avionics", label: "Avionics" },
  { href: "/bible-study", label: "Bible Study" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav no-print">
      <span className="nav-title">Arms of Deliverance</span>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href)) ? "active" : ""}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
