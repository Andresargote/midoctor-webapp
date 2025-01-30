import Logo from "../ui/icons/Logo";

export default function PaneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-neutrals-dirtyWhite">
      <div>
        <header className="bg-primary-500 px-10 py-2">
          <Logo />
          <nav>
            <ul></ul>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
}
