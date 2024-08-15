import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/navbar/Navbar'
import Container from '@/components/global/Container'
import Providers from './providers'
const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Care Finder',
  description: 'Your Gateway to Quality Healthcare',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inconsolata.className}>
        <Providers>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
