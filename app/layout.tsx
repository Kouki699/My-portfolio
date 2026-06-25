import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kouki-u-portfolio.vercel.app"),
  title: {
    default: "内倉 康喜 | Research & Engineering",
    template: "%s | 内倉 康喜",
  },
  description:
    "画像処理・AIを用いた身体動作解析に取り組む大学院生、内倉 康喜の公式サイトです。",
  keywords: [
    "内倉 康喜",
    "Kouki Uchikura",
    "画像処理",
    "AI",
    "身体動作解析",
    "ポートフォリオ",
    "宮崎大学大学院",
  ],
  authors: [{ name: "Kouki Uchikura" }],
  creator: "Kouki Uchikura",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "内倉 康喜 | Research & Engineering",
    description:
      "画像処理・AIを用いた身体動作解析に取り組む大学院生、内倉 康喜の公式サイトです。",
    url: "https://kouki-u-portfolio.vercel.app",
    siteName: "Kouki Uchikura Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kouki Uchikura Research Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "内倉 康喜 | Research & Engineering",
    description:
      "画像処理・AIを用いた身体動作解析に取り組む大学院生、内倉 康喜の公式サイトです。",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJp.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
