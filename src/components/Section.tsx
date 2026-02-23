import { ReactNode } from "react";

export default function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#ff3b30]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#ffffff] md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c9c9c9] md:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
