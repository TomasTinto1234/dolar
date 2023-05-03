import {Space_Mono} from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({subsets: ["latin"], weight: ["400", "700"]});

export const metadata = {
  title: "Dolar Cotizacion",
  description: "Generated next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <main className="flex items-center justify-center h-screen bg-emerald-100">
          <div className="flex flex-col flex-1 max-w-screen-md px-4 mx-auto">
            <div className="grid flex-1 w-full p-8 bg-white shadow-lg rounded-3xl">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
