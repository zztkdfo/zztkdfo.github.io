import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zztkdfo.github.io/" || ""),
  title: {
    default: "이상래 | 프론트엔드 개발자",
    template: "%s | " + "이상래 | 프론트엔드 개발자",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description: "프론트엔드 개발자 이상래의 포트폴리오입니다.",
  openGraph: {
    title: "이상래 | 프론트엔드 개발자",
    description: "프론트엔드 개발자 이상래의 포트폴리오입니다.",
    siteName: "이상래 | 프론트엔드 개발자",
    locale: "ko_KR",
    type: "website",
    url: "https://zztkdfo.github.io/",
    images: "/favicon.svg",
  },
  // verification: verification,
  // robots: {
  //   index: isProduction,
  //   follow: isProduction,
  //   googleBot: {
  //     index: isProduction,
  //     follow: isProduction,
  //     "max-image-preview": "standard",
  //     "max-snippet": -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
