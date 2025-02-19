import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "./components/container";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "* Max Naumanen",
    template: "%s | * Max",
  },
  description:
    "UI Designer, developer",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="text-[clamp(2vw,2vi+400,(1.1vw))] no-scrollbar h-full bg-background"
    >
      <body
        className={`${inter.className} antialiased overflow-x-hidden h-full`}
      >
        <Container>
          <Nav />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
