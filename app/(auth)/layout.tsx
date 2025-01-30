import Link from "next/link";
import Logo from "../ui/icons/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-primary-500">
      <div
        className="py-8 px-6 min-h-screen"
        style={{
          display: "grid",
          gridTemplateRows: "min-content auto",
          gap: "1rem",
        }}
      >
        <header>
          <Link href="/">
            <Logo width={150} height={40} />
          </Link>
        </header>
        {children}
      </div>
    </div>
  );
}
