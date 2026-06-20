import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="section-shell flex flex-col gap-3 py-10 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-navy">{profile.name}</p>
        <p>© {new Date().getFullYear()} {profile.romanName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
