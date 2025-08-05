import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ceri Handycraft - Percetakan Kemasan Berkualitas",
  description:
    "Solusi cetak kemasan untuk UMKM yang ingin tampil profesional tanpa harus cetak ribuan. Kualitas tetap premium, harga tetap bersahabat!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
