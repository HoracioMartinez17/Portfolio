import {  DM_Sans } from 'next/font/google'
import './globals.css'

const Sans  = DM_Sans ({ subsets: ['latin'],
                 weight:['600','700'],
                style: ['italic','normal'],
              variable: '--font-DM_Sans' })

export const metadata = {
  title: 'Horacio Dev Portfolio',
  description: 'Proyecto creado por Horacio Martínez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={Sans .className}>{children}</body>
    </html>
  )
}
