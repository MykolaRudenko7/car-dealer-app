import type { Metadata } from 'next'
import 'app/globals.css'

export const metadata: Metadata = {
  title: 'Car Dealer App',
  description: 'Front-end JS engineer test assessment - the Car Dealer App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
