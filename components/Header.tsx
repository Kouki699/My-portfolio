import { Menu } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/[0.94] backdrop-blur">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="トップへ戻る">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-navy text-sm font-black text-white">
              U
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black text-navy">{profile.name}</span>
              <span className="block text-[11px] font-medium text-steel">
                Portfolio
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ナビゲーション">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-steel transition hover:bg-soft hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-md bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-accent sm:inline-flex"
          >
            Contact
          </a>

          <details className="group relative lg:hidden">
            <summary
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-line text-navy marker:hidden"
              aria-label="メニュー"
              title="メニュー"
            >
              <Menu size={20} />
            </summary>
            <nav
              className="absolute right-0 top-12 w-56 rounded-lg border border-line bg-white p-2 shadow-calm"
              aria-label="モバイルナビゲーション"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-bold text-steel hover:bg-soft hover:text-navy"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
