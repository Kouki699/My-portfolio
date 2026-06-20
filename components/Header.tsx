import { Menu } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/[0.92] backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="トップへ戻る">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-black text-white">
              U
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black text-navy">{profile.name}</span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
                Research
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ナビゲーション">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-steel transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-navy px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-navy transition hover:bg-navy hover:text-white sm:inline-flex"
          >
            Contact
          </a>

          <details className="group relative lg:hidden">
            <summary
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-line text-navy marker:hidden"
              aria-label="メニュー"
              title="メニュー"
            >
              <Menu size={20} />
            </summary>
            <nav
              className="absolute right-0 top-12 w-64 border border-line bg-white p-3 shadow-calm"
              aria-label="モバイルナビゲーション"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block border-b border-line px-2 py-3 text-xs font-black uppercase tracking-[0.12em] text-steel last:border-b-0 hover:text-accent"
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
