type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
  title?: string;
  description?: string;
};

export default function Logo({
  width = 150,
  height = 80,
  color = "#fff",
  title = "MiDoctor Logo",
  description = "Logo oficial de MiDoctor", // Descripción para lectores de pantalla
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 173 46`}
      aria-labelledby="logoTitle logoDesc"
    >
      <title id="logoTitle">{title}</title>
      <desc id="logoDesc">{description}</desc>
      <path
        fill={color}
        d="M161.143 28.41V8.674h4.934v2.228h.716c.292-.795.769-1.38 1.432-1.75.69-.372 1.486-.557 2.388-.557H173v4.456h-2.467c-1.273 0-2.321.345-3.143 1.034-.823.664-1.234 1.698-1.234 3.104v11.22h-5.013ZM146.17 28.967c-1.963 0-3.727-.398-5.292-1.194a8.954 8.954 0 0 1-3.701-3.462c-.901-1.512-1.352-3.329-1.352-5.45v-.637c0-2.123.451-3.94 1.352-5.452a8.954 8.954 0 0 1 3.701-3.461c1.565-.796 3.329-1.194 5.292-1.194 1.963 0 3.727.398 5.292 1.194a8.952 8.952 0 0 1 3.7 3.461c.902 1.512 1.353 3.33 1.353 5.452v.636c0 2.122-.451 3.94-1.353 5.451a8.952 8.952 0 0 1-3.7 3.462c-1.565.796-3.329 1.194-5.292 1.194Zm0-4.457c1.538 0 2.812-.49 3.82-1.472 1.008-1.008 1.512-2.44 1.512-4.297v-.398c0-1.857-.504-3.276-1.512-4.258-.982-1.008-2.255-1.512-3.82-1.512-1.539 0-2.812.504-3.82 1.512-1.008.982-1.512 2.401-1.512 4.258v.398c0 1.857.504 3.289 1.512 4.297 1.008.982 2.281 1.472 3.82 1.472ZM126.893 28.41c-1.3 0-2.361-.398-3.183-1.194-.796-.822-1.194-1.91-1.194-3.263v-11.14h-4.934V8.673h4.934V2.547h5.013v6.127h5.412v4.138h-5.412v10.266c0 .796.372 1.194 1.115 1.194h3.819v4.138h-5.57ZM105.95 28.967c-1.91 0-3.647-.398-5.212-1.194-1.539-.796-2.759-1.95-3.66-3.462-.903-1.512-1.354-3.342-1.354-5.49v-.558c0-2.148.451-3.979 1.353-5.49.902-1.513 2.122-2.666 3.661-3.462 1.565-.796 3.302-1.194 5.212-1.194 1.884 0 3.502.332 4.855.995 1.352.663 2.44 1.578 3.262 2.745.849 1.14 1.406 2.44 1.671 3.9l-4.854 1.034a5.72 5.72 0 0 0-.716-2.149 3.975 3.975 0 0 0-1.592-1.511c-.663-.372-1.498-.558-2.506-.558-1.008 0-1.923.226-2.746.677-.796.424-1.432 1.074-1.91 1.95-.451.848-.676 1.896-.676 3.143v.398c0 1.247.225 2.308.676 3.183.478.849 1.114 1.499 1.91 1.95.823.424 1.738.636 2.746.636 1.512 0 2.652-.384 3.422-1.154.795-.795 1.299-1.83 1.512-3.103l4.854 1.154a10.925 10.925 0 0 1-1.791 3.86c-.822 1.14-1.91 2.042-3.262 2.705-1.353.663-2.971.995-4.855.995ZM81.707 28.967c-1.963 0-3.727-.398-5.292-1.194a8.951 8.951 0 0 1-3.7-3.462c-.903-1.512-1.354-3.329-1.354-5.45v-.637c0-2.123.451-3.94 1.353-5.452a8.951 8.951 0 0 1 3.7-3.461c1.566-.796 3.33-1.194 5.293-1.194 1.962 0 3.726.398 5.292 1.194a8.952 8.952 0 0 1 3.7 3.461c.902 1.512 1.353 3.33 1.353 5.452v.636c0 2.122-.451 3.94-1.353 5.451a8.952 8.952 0 0 1-3.7 3.462c-1.566.796-3.33 1.194-5.292 1.194Zm0-4.457c1.538 0 2.811-.49 3.82-1.472 1.007-1.008 1.511-2.44 1.511-4.297v-.398c0-1.857-.504-3.276-1.512-4.258-.981-1.008-2.254-1.512-3.82-1.512-1.538 0-2.811.504-3.82 1.512-1.007.982-1.511 2.401-1.511 4.258v.398c0 1.857.504 3.289 1.512 4.297 1.008.982 2.28 1.472 3.82 1.472ZM44.86 28.41v-4.616h3.662V5.173H44.86V.557h11.46c3.74 0 6.578.955 8.514 2.865 1.963 1.883 2.945 4.695 2.945 8.435v5.252c0 3.74-.982 6.566-2.945 8.475-1.936 1.884-4.774 2.826-8.515 2.826H44.86Zm8.914-4.775H56.4c2.122 0 3.674-.557 4.655-1.671.982-1.114 1.472-2.68 1.472-4.695v-5.57c0-2.043-.49-3.608-1.472-4.696-.981-1.114-2.533-1.671-4.655-1.671h-2.626v18.303ZM35.247 28.41V8.674h5.013V28.41h-5.013Zm2.507-22.044c-.902 0-1.672-.291-2.308-.875-.61-.584-.915-1.353-.915-2.308 0-.955.305-1.724.915-2.308C36.082.292 36.852 0 37.754 0c.928 0 1.697.292 2.307.875.61.584.916 1.353.916 2.308 0 .955-.306 1.724-.916 2.308-.61.584-1.379.875-2.307.875ZM0 28.41V.557h9.748l4.815 24.271h.716L20.094.557h9.748V28.41h-5.093V4.417h-.716L19.258 28.41h-8.674L5.809 4.417h-.716V28.41H0ZM80.683 31.829a13.367 13.367 0 0 0 26.733 0h-4.613a8.752 8.752 0 0 1-14.943 6.19 8.754 8.754 0 0 1-2.564-6.19h-4.613Z"
      />
    </svg>
  );
}
