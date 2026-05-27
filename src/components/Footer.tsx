export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-2 text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="border-t border-background/10 pt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-background">
                  <span className="font-display text-[15px] leading-none text-ink">a</span>
                </span>
                <span className="text-[13px] font-medium tracking-[0.32em]">AERVO</span>
              </div>
              <p className="mt-5 max-w-[220px] text-[12px] leading-relaxed text-background/55">
                The Art of Moving — premium grocery delivery from Makthal &amp; Narayanpet.
              </p>
            </div>

            {[
              ["Services", ["Grocery", "Milk", "Meat", "Fish", "Vegetables"]],
              ["Studio", ["About", "Process", "Voices"]],
              ["Contact", ["+91 9963 791 004", "Aervo99@gmail.com", "Mon — Sat · 6 AM – 6 PM"]],
            ].map(([title, items]) => (
              <div key={title as string}>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/45">
                  {title as string}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {(items as string[]).map((it) => (
                    <li
                      key={it}
                      className="text-[13px] text-background/80 transition-colors hover:text-background"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-background/45 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} AERVO — All rights reserved</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--jade)]" />
              Delivering today · Makthal · Narayanpet
            </span>
          </div>

          {/* oversized wordmark */}
          <div className="mt-12 overflow-hidden">
            <div className="select-none font-display text-[clamp(5rem,22vw,22rem)] leading-[0.85] tracking-[-0.04em] text-background/[0.08]">
              AERVO
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
