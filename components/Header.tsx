import { Menu } from "lucide-react";
import { navigation } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy bg-white">
      <div className="section-shell">
        <div className="flex h-[5.25rem] items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="トップへ戻る">
            <span className="slash-mark" aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-2xl font-black tracking-tight text-navy">
                UCHIKURA
              </span>
              <span className="block text-[10px] font-black uppercase tracking-[0.28em] text-steel">
                Research Engineer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ナビゲーション">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-sm font-black text-navy transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-accent sm:inline-flex"
          >
            お問い合わせ
          </a>

          <details className="group relative lg:hidden">
            <summary
              className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-navy text-navy marker:hidden"
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
