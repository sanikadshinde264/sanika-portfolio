export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="section-container">
        {(eyebrow || title) && (
          <div className="mb-12 reveal">
            {eyebrow && (
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-ink-muted text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
