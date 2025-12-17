import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ServiNET+",
  description:
    "La red de recaudo y servicios digitales más confiable para negocios de barrio en Latinoamérica. Facilita productos y servicios en línea, incrementa tus ganancias y sé el referente de tu comunidad.",
  keywords:
    "pagos digitales, recaudo, servicios, negocios de barrio, Latinoamérica, recargas, transferencias",
  openGraph: {
    title: "ServiNET+",
    description:
      "Facilita productos y servicios en línea ayudando a incrementar tus ganancias",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/loguito.png",
    apple: "/loguito.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
