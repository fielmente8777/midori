import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import { WebProvider } from "../context-api/WebContext";
import OfferSection from "../components/OfferSection";
import LandingNavbar from "../components/navbar/LandingNavbar";
import LandingFooter from "../components/footer/LandingFooter";
import PopUpForm from "../components/pop-up/PopUpForm";
import Call from "../components/ContactButton/Call";
import Whatsapp from "../components/ContactButton/WhatsApp";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midori | Luxury Farmstay near Mahabalipuram, Chennai",
  description:
    "Two art-filled villas and a hut room on five acres of paddy fields and mango groves, with a long linear pool, just over an hour from Chennai. Book early and save 10%.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#55a947",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      {/* Add Meta Pixel / GA4 / GTM / EazBot scripts for Midori here */}
      <body suppressHydrationWarning={true}>
        <WebProvider>
          <OfferSection />
          <LandingNavbar />
          {children}
          <LandingFooter />
          <PopUpForm />
          <Call />
          <Whatsapp />
        </WebProvider>
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "10a56d90-5c7c-45d2-b449-7cee2ced3328",
       hid: "96210201",
    };
  `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
