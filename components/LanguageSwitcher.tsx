'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface LanguageSwitcherProps {
  absolute?: boolean
}

export default function LanguageSwitcher({ absolute = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`${absolute ? 'absolute' : 'fixed'} top-4 right-4 md:right-4 z-50 flex gap-2`}>
      <motion.button
        onClick={() => setLanguage('ko')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
          language === 'ko'
            ? 'bg-traditional-gold/30 border-2 border-traditional-gold shadow-md'
            : 'bg-white/80 border-2 border-traditional-gold/30 shadow-sm hover:bg-white'
        }`}
        aria-label="한국어"
      >
        🇰🇷
      </motion.button>
      <motion.button
        onClick={() => setLanguage('zh-TW')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
          language === 'zh-TW'
            ? 'bg-traditional-gold/30 border-2 border-traditional-gold shadow-md'
            : 'bg-white/80 border-2 border-traditional-gold/30 shadow-sm hover:bg-white'
        }`}
        aria-label="繁體中文"
      >
        🇹🇼
      </motion.button>
    </div>
  )
}

