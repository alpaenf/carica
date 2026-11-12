import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carica Gemilang - Cita Rasa Asli Dataran Tinggi Dieng Wonosobo",
  description:
    "Produsen olahan carica Dieng premium berstandar CPPOB Grade A, bersertifikat BPOM RI & Halal MUI di Kejajar, Wonosobo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#f6fbf1] text-[#181d17]">
        {children}
      </body>
    </html>
  );
}
