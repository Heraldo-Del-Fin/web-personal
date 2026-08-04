import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Configuración del adaptador de Cloudflare.
 *
 * Sin caché incremental: todas las páginas del sitio se generan en el build y
 * se sirven como archivos estáticos, así que no hay nada que revalidar. Si algún
 * día añades contenido que se actualice solo (un blog desde un CMS, por ejemplo),
 * aquí se enchufa un bucket R2 como caché.
 */
export default defineCloudflareConfig();
