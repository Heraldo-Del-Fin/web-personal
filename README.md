# Portafolio personal

Sitio de presentación y venta de servicios de desarrollo web. Next.js 16 (App Router),
React 19, TypeScript y Tailwind CSS v4. Bilingüe español/inglés y estático en su totalidad.

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # compilación de producción
npm start       # servir la compilación
npm run lint    # ESLint
```

## Qué editar (y qué no hace falta tocar)

Todo el contenido vive en `content/`. No necesitas entrar en los componentes para
cambiar textos, precios ni proyectos.

| Archivo | Qué contiene |
| --- | --- |
| `content/site.ts` | Nombre, WhatsApp, correo, redes, foto, URL del sitio. **Empieza por aquí.** |
| `content/dictionaries/es.ts` | Todos los textos en español. |
| `content/dictionaries/en.ts` | Los mismos textos en inglés. |
| `content/services.ts` | Servicios, entregables, precios y la lista de tecnologías. |
| `content/projects.ts` | Proyectos y sus casos de estudio. |
| `content/testimonials.ts` | Testimonios (vacío hasta que tengas opiniones reales). |

Si añades una clave nueva a `content/dictionaries/types.ts`, TypeScript te avisará
hasta que la traduzcas en los dos idiomas.

### Imágenes

- Capturas de proyectos: guárdalas en `public/proyectos/` y apunta a ellas desde el campo
  `image` de cada proyecto (`"/proyectos/mi-proyecto.jpg"`, 1600×1000 px va bien).
  Mientras el campo esté vacío se dibuja un marcador con degradado.
- Tu foto: guárdala en `public/` y ponla en `site.photo` (`"/foto.jpg"`, cuadrada).

## Formulario de contacto

Los mensajes llegan por correo con [Resend](https://resend.com):

1. `cp .env.example .env.local`
2. Crea una cuenta en Resend → **API Keys** → **Create API Key**.
3. Pega la clave en `RESEND_API_KEY` dentro de `.env.local`.
4. Para enviar desde tu propio dominio, verifícalo en Resend y actualiza
   `site.contactFromEmail`. Sin dominio verificado funciona `onboarding@resend.dev`.

Sin la clave el sitio funciona igual: el formulario muestra un aviso y el visitante
puede escribirte por WhatsApp o correo.

## Idiomas

- Rutas: `/es` y `/en`. `proxy.ts` (el antiguo `middleware.ts` de Next 16) manda cada
  visita a su idioma según la cookie `NEXT_LOCALE` y, si no la hay, según el navegador.
- Las URL de proyectos están traducidas: `/es/proyectos/...` y `/en/projects/...`
  apuntan a la misma página gracias al `rewrite` de `next.config.ts`.

## Publicar

1. Sube el repositorio a GitHub e impórtalo en [Vercel](https://vercel.com/new).
2. Añade la variable de entorno `RESEND_API_KEY` en el proyecto de Vercel.
3. Conecta tu dominio y actualiza `site.url` con la URL definitiva
   (la usan el sitemap, las etiquetas canónicas y la imagen para compartir).
