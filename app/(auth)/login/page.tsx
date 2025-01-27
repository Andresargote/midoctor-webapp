import LoginForm from "@/app/ui/components/Form/Login";

export default function Login() {
  return (
    <div className="flex flex-col justify-center">
      <main className="w-full max-w-xl mx-auto rounded-3xl bg-neutrals-white p-8 shadow-md">
        <header className="mb-8">
          <h1 className="text-center md:text-start text-neutrals-black text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            ¡Bienvenido a MiDoctor!
          </h1>
          <p className="text-center mx-auto md:mx-0 md:text-start text-neutrals-darkGray font-medium text-lg md:text-xl max-w-[30ch]">
            Inicia sesión
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 items-start">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
