import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import './scss/style.scss'
import { Header } from "@/components/header/page";
import { Footer } from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = 'TT Creative – Marketing Digital e Branding'
const description = 'A TT Creative oferece soluções em marketing digital, branding e estratégias personalizadas para impulsionar sua marca e alcançar resultados reais.'

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
