import type { Metadata } from 'next'
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const notoSerif = Noto_Serif_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const notoSans = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '결혼합니다',
  description: '모바일 청첩장',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

