import Link from "next/link";

/*
- Validate user account, if valid, redirecto to dashboard but if not, show generic error message
*/

export default function Login() {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nombre@dominio.com"
            className="p-4 rounded-2xl bg-neutrals-lightGray"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 w-full p-4 rounded-2xl font-bold text-white
                    transition-all duration-200
                    hover:bg-primary-600 hover:scale-[1.01]
                    active:scale-[0.99]"
        >
          Iniciar sesión
        </button>
      </form>
      <p className="mt-4 text-neutrals-darkGray">
        No tienes una cuenta?{" "}
        <Link href="/registro" className="text-primary-500 font-bold underline">
          Regístrate ahora
        </Link>
      </p>
    </div>
  );
}
