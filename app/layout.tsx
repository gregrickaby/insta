import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insta - Photos by Greg Rickaby",
  description: "A feed of my photos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="text-4xl font-bold text-center">
            <Link href="/">📸 Insta</Link>
          </h1>
          <p className="text-center">Photos by Greg Rickaby</p>
        </header>
        {children}
      </body>
    </html>
  );
}
