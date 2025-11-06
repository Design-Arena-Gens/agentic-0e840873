import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مصمم بوستات احترافي - Marketing Post Designer',
  description: 'أداة احترافية لتصميم بوستات التسويق الإلكتروني',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
