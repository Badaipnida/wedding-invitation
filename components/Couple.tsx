'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Couple() {
  const { t } = useLanguage()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-8 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl text-center mb-12 text-traditional-darkBrown"
        >
          {t('couple.title')}
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* 신랑 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-traditional-gold/30 shadow-lg">
              <Image
                src="/jongseok_main.jpg"
                alt="신랑 이종석"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-2xl font-semibold mb-1 md:mb-2 text-traditional-darkBrown">
              🇰🇷 {t('couple.groom')}
            </h3>
            <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown mb-1 md:mb-2">
              {t('couple.groom.hanja')}
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base mb-1">
              {t('couple.groom.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.father.hanja')}</span>
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base">
              {t('couple.groom.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.mother.hanja')}</span>
            </p>
          </motion.div>

          {/* 신부 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-traditional-gold/30 shadow-lg">
              <Image
                src="/yoojung_main.jpg"
                alt="신부 곽유정"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-2xl font-semibold mb-1 md:mb-2 text-traditional-darkBrown">
              🇹🇼 {t('couple.bride')}
            </h3>
            <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown mb-1 md:mb-2">
              {t('couple.bride.hanja')}
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base mb-1">
              {t('couple.bride.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.father.hanja')}</span>
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base">
              {t('couple.bride.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.mother.hanja')}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

