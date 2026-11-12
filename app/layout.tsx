import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carica Gemilang - Cita Rasa Asli Dataran Tinggi Dieng Wonosobo",
  description:
    "Produsen olahan carica Dieng premium berstandar CPPOB Grade A, bersertifikat BPOM RI & Halal MUI di Kejajar, Wonosobo.",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/logo.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth notranslate ${plusJakartaSans.variable}`} translate="no">
      <head>
        <meta name="google" content="notranslate" />
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
        {/* Tailwind CDN runtime to preserve 100% of the custom design system classes */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "tertiary": "#3e6a02",
                      "secondary": "#2e6a41",
                      "on-surface": "#181d17",
                      "on-tertiary-fixed-variant": "#2d5000",
                      "on-tertiary-container": "#386200",
                      "on-tertiary": "#ffffff",
                      "surface-variant": "#dfe4db",
                      "on-secondary-fixed-variant": "#12512c",
                      "background": "#f6fbf1",
                      "outline": "#7f765f",
                      "surface-container": "#ebefe6",
                      "surface-container-low": "#f1f5eb",
                      "on-secondary-fixed": "#00210d",
                      "secondary-fixed-dim": "#96d5a3",
                      "on-tertiary-fixed": "#0f2000",
                      "surface-container-lowest": "#ffffff",
                      "inverse-primary": "#eec200",
                      "surface-tint": "#725c00",
                      "surface-container-highest": "#dfe4db",
                      "on-primary-fixed-variant": "#564500",
                      "error": "#ba1a1a",
                      "inverse-surface": "#2d322c",
                      "on-primary-container": "#6a5500",
                      "on-primary-fixed": "#231b00",
                      "primary-fixed-dim": "#eec200",
                      "surface-container-high": "#e5eae0",
                      "on-error": "#ffffff",
                      "error-container": "#ffdad6",
                      "on-secondary": "#ffffff",
                      "on-surface-variant": "#4d4632",
                      "outline-variant": "#d1c6ab",
                      "tertiary-fixed": "#bdf382",
                      "secondary-fixed": "#b1f2be",
                      "on-primary": "#ffffff",
                      "tertiary-fixed-dim": "#a2d669",
                      "tertiary-container": "#a9dd6f",
                      "primary-container": "#f6c900",
                      "surface-dim": "#d7dbd2",
                      "on-secondary-container": "#347047",
                      "primary": "#725c00",
                      "inverse-on-surface": "#eef2e9",
                      "primary-fixed": "#ffe081",
                      "surface": "#f6fbf1",
                      "on-error-container": "#93000a",
                      "on-background": "#181d17",
                      "secondary-container": "#b1f2be",
                      "surface-bright": "#f6fbf1"
                    },
                    borderRadius: {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
                    },
                    spacing: {
                      "gutter": "1.5rem",
                      "space-sm": "0.5rem",
                      "space-xl": "2.5rem",
                      "space-2xl": "4rem",
                      "space-xs": "0.25rem",
                      "space-md": "1rem",
                      "margin-mobile": "1.25rem",
                      "margin": "3rem",
                      "gutter-mobile": "1rem",
                      "space-lg": "1.5rem"
                    },
                    fontFamily: {
                      "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
                      "display-xl": ["Plus Jakarta Sans", "sans-serif"],
                      "body-sm": ["Plus Jakarta Sans", "sans-serif"],
                      "label-sm": ["Plus Jakarta Sans", "sans-serif"],
                      "headline-md": ["Plus Jakarta Sans", "sans-serif"],
                      "body-md": ["Plus Jakarta Sans", "sans-serif"],
                      "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
                      "display-lg": ["Plus Jakarta Sans", "sans-serif"],
                      "label-lg": ["Plus Jakarta Sans", "sans-serif"],
                      "label-md": ["Plus Jakarta Sans", "sans-serif"],
                      "body-lg": ["Plus Jakarta Sans", "sans-serif"],
                      "display-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
                      "display-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
                      "title-md": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    fontSize: {
                      "headline-sm": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.005em", "fontWeight": "600" }],
                      "display-xl": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "800" }],
                      "body-sm": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "400" }],
                      "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.06em", "fontWeight": "700" }],
                      "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                      "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }],
                      "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.015em", "fontWeight": "700" }],
                      "display-lg": ["44px", { "lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                      "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600" }],
                      "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "600" }],
                      "body-lg": ["18px", { "lineHeight": "28px", "letterSpacing": "0em", "fontWeight": "400" }],
                      "display-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                      "display-xl-mobile": ["38px", { "lineHeight": "46px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                      "title-md": ["18px", { "lineHeight": "26px", "letterSpacing": "0em", "fontWeight": "600" }]
                    }
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#f6fbf1] text-[#181d17]">
        {children}
      </body>
    </html>
  );
}
