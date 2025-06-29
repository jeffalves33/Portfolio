import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeferson Alves - Engenheiro & Coach de Prosperidade",
  description: "Portfólio pessoal de Jeferson Alves - Engenheiro de Computação, Empreendedor e Coach de Prosperidade",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
