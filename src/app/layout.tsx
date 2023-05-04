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
    <body className="mono-font">
    <nav className="navbar">
  <div className="navbar-brand">
    <a href="#" className="navbar-item">dolarHoy</a>
    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <div id="navbarMenu" className="navbar-menu">
    <div className="navbar-start">
      <a href="#" className="navbar-item">Inicio</a>
      <a href="#" className="navbar-item">Sobre nosotros</a>
      <a href="#" className="navbar-item">Contacto</a>
    </div>
  </div>
</nav>

      <main className="main-content">
        <div className="content-wrapper">
          <div className="inner-content">{children}</div>
        </div>
      </main>
    </body>
  </html>
  );
}
