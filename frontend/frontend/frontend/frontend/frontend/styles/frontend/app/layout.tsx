import './styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'لوحة Smart Teacher',
  description: 'منصة Smart Teacher للمدرسين'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}
