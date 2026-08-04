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

- Rutas: `/es` y `/en`. `app/route.ts` manda cada visita de la raíz a su idioma según la
  cookie `NEXT_LOCALE` y, si no la hay, según el `Accept-Language` del navegador.
- Las URL de proyectos están traducidas: `/es/proyectos/...` y `/en/projects/...`
  apuntan a la misma página gracias al `rewrite` de `next.config.ts`.

## Publicar en Cloudflare Workers

El sitio se despliega con [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).
El plan gratuito de Workers permite uso comercial (el plan Hobby de Vercel no).

```bash
npm run preview   # compila y sirve el Worker en local, en http://localhost:8787
npm run deploy    # compila y publica en Cloudflare
```

Primera vez:

1. `npx wrangler login` para conectar tu cuenta de Cloudflare.
2. `npx wrangler secret put RESEND_API_KEY` y pega la clave (queda guardada en
   Cloudflare, no en el repositorio).
3. `npm run deploy`.
4. En el panel de Cloudflare, **Workers & Pages → web-personal → Domains & Routes**,
   conecta tu dominio.
5. En `content/site.ts`, pon `url` con la URL definitiva y `indexable: true`.
   Hasta entonces el sitio pide a los buscadores que no lo indexen, para que la URL
   temporal de `workers.dev` no acabe compitiendo con tu dominio en Google.
   Después vuelve a desplegar con `npm run deploy`.

Para probar en local con envío de correo real: copia `.dev.vars.example` a `.dev.vars`
y pon ahí tu `RESEND_API_KEY`.

### Optimización de imágenes

`next/image` usa el binding `IMAGES` declarado en `wrangler.jsonc`, que requiere activar
**Transformations** en el panel de Cloudflare (el plan gratuito incluye 5 000 al mes).
Si prefieres no activarlo, borra el bloque `images` de `wrangler.jsonc` y añade
`images: { unoptimized: true }` en `next.config.ts`.
