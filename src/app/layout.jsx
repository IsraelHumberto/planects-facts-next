import '@/styles/globals.css'
import '@/styles/custom.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Antonio, League_Spartan } from 'next/font/google'

const antonio = Antonio({ 
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-antonio'
})

const spartan = League_Spartan({ 
    subsets: ['latin'],
    weight: ['400', '700']
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spartan.className} ${antonio.variable}`}>{children}</body>
    </html>
  )
}
