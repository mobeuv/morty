/**
 * Utilitários leves (sem dependências externas).
 */

/** Junta classes condicionais em uma única string. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Prefixa um caminho com o basePath do Next (para assets estáticos). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base || path.startsWith(base)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
