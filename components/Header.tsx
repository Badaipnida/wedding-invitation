'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Header() {
  const { t, language } = useLanguage()
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen max-h-[100vh] overflow-hidden bg-transparent"
    >
      {/* PC에서는 신랑/신부 섹션과 동일한 폭, 모바일에서는 전체 폭 */}
      <div className="relative w-full max-w-4xl mx-auto h-full bg-transparent">
        {/* 언어 전환 버튼 - 메인 이미지 컨테이너 내부에 배치 */}
        <div className="absolute top-4 right-4 z-50">
          <LanguageSwitcher absolute />
        </div>
        
        {/* 메인 이미지 */}
        <div className="relative w-full h-full bg-transparent">
          <Image
            src="/main.jpg"
            alt="메인 웨딩 사진"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20" />
          
          {/* 위쪽 프레임 장식 */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <Image
              src="/Frame_upside.png"
              alt="위쪽 프레임"
              width={896}
              height={100}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          
          {/* 아래쪽 프레임 장식 */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <Image
              src="/Frame_Downside.png"
              alt="아래쪽 프레임"
              width={896}
              height={100}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* 텍스트 오버레이 - 상단에 배치하여 옷과 겹치지 않도록 */}
        <div className="absolute inset-0 flex flex-col items-center justify-start px-4 pt-12 md:pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/double-happiness.png"
              alt="쌍희"
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 object-contain"
              priority
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src="/mandarin-ducks.png"
                alt="원앙"
                width={120}
                height={80}
                className="w-28 h-auto md:w-36 md:h-auto mx-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg"
          >
            {t('header.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`text-white text-sm md:text-base lg:text-lg drop-shadow-md leading-relaxed whitespace-pre-line ${
              language === 'zh-TW' ? 'font-sans' : ''
            }`}
          >
            {t('header.subtitle')}
          </motion.p>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  )
}

