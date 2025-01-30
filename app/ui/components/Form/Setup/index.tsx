/*
- Actualizar input de Imagen de perfil a uno mejor
*/

export const Setup = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 items-start h-full">
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Imagen de perfil
          </label>
          <input id="image" name="image" type="file" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Nombre*
          </label>
          <input
            required
            id="name"
            name="name"
            placeholder="Andres"
            className="p-4 rounded-2xl bg-neutrals-lightGray"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Apellido*
          </label>
          <input
            required
            id="lastName"
            name="lastName"
            placeholder="Argote"
            className="p-4 rounded-2xl bg-neutrals-lightGray"
          />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Profesión*
          </label>
          <select
            id="profession"
            name="profession"
            className="p-4 rounded-2xl bg-neutrals-lightGray"
          >
            <option value="doctor">Psicólogo</option>
            <option value="nurse">Enfermera</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutrals-darkGray">
            Número de teléfono*
          </label>
          <input
            required
            id="phone"
            name="phone"
            placeholder="04244396545"
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
          Guardar y continuar
        </button>
      </section>
    </form>
  );
};
