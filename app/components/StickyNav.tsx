const links = [
  ["About", "about"],
  ["Case Studies", "case-studies"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Leadership Value", "leadership-value"],
  ["Contact", "contact"]
] as const;

export function StickyNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-cloud/90 bg-mist/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-wide text-steel">
          Ankit Soni
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-sm text-steel transition hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
