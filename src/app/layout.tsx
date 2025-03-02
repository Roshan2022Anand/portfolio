import { IBM_Plex_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-robotic",
});

export const metadata = {
  title: "Roshan Anand",
  description: "Engineer portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
