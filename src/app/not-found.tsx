import Link from "next/link";
import { Mark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-mist">
      <div className="container-x py-24 text-center">
        <div className="flex justify-center text-navy-900">
          <Mark className="h-12" />
        </div>
        <p className="mt-8 font-mono text-sm tracking-[0.3em] text-brand-600">
          ERRO 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 md:text-6xl">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          A página que você procura não existe ou foi movida. Vamos voltar ao
          início.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex h-12 items-center rounded-full bg-brand-600 px-7 text-sm font-medium text-white transition-colors hover:bg-brand-500"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
