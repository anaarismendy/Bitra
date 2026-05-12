# BITRA · Brandbook (sitio estático + Vite)

## Desarrollo

```bash
npm install
cp .env.example .env
# Edita .env con la URL y la anon key de tu proyecto Supabase (Settings → API)

npm run dev
```

Abre la URL que indique Vite (por ejemplo `/Landing.html`).

## Build para producción

```bash
npm run build
```

Los artefactos quedan en `dist/`. Sirve esa carpeta con cualquier hosting estático.

## Autenticación (Supabase)

- **Landing**: el enlace del pie «Brandbook completo →» abre el panel de acceso. Inicio de sesión y alta opcional con **correo + contraseña** (`signInWithPassword` / `signUp`), usando `@supabase/supabase-js` empaquetado por Vite.
- **Brandbook**: `src/brandbook-guard.js` comprueba la sesión; si no hay usuario autenticado, redirige a `Landing.html` con `#auth` y parámetros de retorno.

Variables de entorno (prefijo `VITE_` para que Vite las inyecte en el cliente):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

No subas `.env` al repositorio. Usa solo `.env.example` como plantilla.

## Recuperación de contraseña

El enlace «Recuperar contraseña» llama a `resetPasswordForEmail`. Configura la plantilla de correo y URLs permitidas en el panel de Supabase (Authentication → URL configuration).
