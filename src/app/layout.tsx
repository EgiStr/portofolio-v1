import "@/styles/globals.css";
import { Metadata } from "next";
import NunitoFonts from "@/utils/fonts";
import { GoogleAnalytics } from "@/components";
import {
  OFFICIAL_AUTHOR_URL,
  OFFICIAL_PLATOFORM_TWITTER_URL,
} from "@/utils/constants";

/** @dev initialize nunito font */
const nunito = NunitoFonts;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Eggi Satria | Portfolio",
  description:
    "Undergraduate Data Sceince | Full-stack Software Developer | Tech Enthusiast ",
  authors: {
    name: "Eggi Satria (a.k.a. EXSTR)",
    url: OFFICIAL_PLATOFORM_TWITTER_URL,
  },
  keywords: [
    "Eggi Satria",
    "Eggi Satria Indonesia",
    "EXSTR",
    "EgiStr",
    "Portfolio eggi satria",
    "Full-stack software developer portfolio",
  ],
  icons: {
    icon: "assets/logo/tlogo.ico",
    shortcut: "assets/logo/tlogo.ico",
  },
  metadataBase: new URL(OFFICIAL_AUTHOR_URL),
  alternates: {
    canonical: "/",
  },

  // ######## OG ########
  openGraph: {
    siteName: "Eggi Satria Portfolio",
    title: "Eggi Satria | Portfolio",
    description:
      "Undergraduate Data Sceince | Full-stack Software Developer | Tech Enthusiast ",
    locale: "id_ID",
    type: "website",
    url: "/",
    images: {
      url: "Foto1.jpeg",
      alt: "Eggi Satria",
      width: 240,
      height: 240,
    },
  },
};
