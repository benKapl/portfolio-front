import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Benjamin Kaplan",
  description: "Discover Benjamin Kaplan's developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <div className="flex flex-col h-screen"> {/* APP CONTAINER*/}
          <header className="bg-slate-900 text-white p-4 text-center">
            Ceci est un header
          </header>
          <div className="flex h-full justify-evenly items-center">  {/* MIDDLE CONTAINER*/}
            <aside className="bg-slate-300 h-full">
              <h1>VOILA UNE SIDEBAR FRERE</h1>
            </aside>
            {children}
          </div>  
          <footer className="bg-slate-900 text-white p-4 text-center">
            Ceci est un footer
          </footer>
        </div>
      </body>
    </html>
  );
}
