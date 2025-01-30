import { Setup } from "@/app/ui/components/Form/Setup";

export default function Configuracion() {
  return (
    <div className="flex flex-col justify-center">
      <main className="w-full max-w-5xl mx-auto rounded-3xl bg-neutrals-white p-8 shadow-md">
        <header className="mb-8">
          <h1 className="text-center md:text-start text-neutrals-black text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Completa tu perfil
          </h1>
          <p className="text-center mx-auto md:mx-0 md:text-start text-neutrals-darkGray font-medium text-lg md:text-xl max-w-[30ch]">
            Completa la información básica de tu perfil
          </p>
        </header>
        <div>
          <Setup />
        </div>
      </main>
    </div>
  );
}
