import Link from "next/link";
import Logo from "../ui/icons/Logo";
import {
  HouseDoor,
  Hospital,
  Clipboard2Pulse,
  Calendar2Check,
  Clock,
} from "react-bootstrap-icons";

export default function PaneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NAV_LINKS = [
    {
      label: "Home",
      href: "/panel",
      icon: <HouseDoor />,
    },
    {
      label: "Consultas",
      href: "/panel/consultas",
      icon: <Calendar2Check />,
    },
    {
      label: "Horarios",
      href: "/panel/horarios",
      icon: <Clock />,
    },
    {
      label: "Servicios",
      href: "/panel/servicios",
      icon: <Clipboard2Pulse />,
    },
    {
      label: "Consultorios",
      href: "/panel/consultorios",
      icon: <Hospital />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutrals-dirtyWhite">
      <div>
        <header className="bg-primary-500 px-10 py-2">
          <Logo />
        </header>
        <nav className="bg-neutrals-white h-min-screen h-full">
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
