import type { Metadata } from 'next'
import Script from 'next/script'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: '이종석🤵🏼‍♂️ & 곽유정👰‍♀️ 결혼합니다',
  description: '2026년 3월 21일, 이종석과 곽유정의 결혼식에 초대합니다',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: '이종석🤵🏼‍♂️ & 곽유정👰‍♀️ 결혼합니다',
    description: '2026년 3월 21일(토) 오후 5시\n한국의 집 (KOREA HOUSE)\n이종석과 곽유정의 결혼식에 초대합니다',
    url: 'https://wedding-kakusoku.vercel.app',
    siteName: 'Wedding Invitation',
    images: [
      {
        url: 'https://wedding-kakusoku.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '이종석 & 곽유정 결혼식 초대장',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이종석🤵🏼‍♂️ & 곽유정👰‍♀️ 결혼합니다',
    description: '2026년 3월 21일(토) 오후 5시\n한국의 집 (KOREA HOUSE)\n이종석과 곽유정의 결혼식에 초대합니다',
    images: ['https://wedding-kakusoku.vercel.app/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Script
          id="typekit"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'nvw7rwx',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `,
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

