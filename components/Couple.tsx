'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Couple() {
  const { t, language } = useLanguage()
  const [selectedContact, setSelectedContact] = useState<'groom' | 'bride' | null>(null)
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
            <div className="flex items-center justify-center gap-1.5 mb-1 md:mb-2">
              <h3 className="font-serif text-base sm:text-lg md:text-2xl font-semibold text-traditional-darkBrown">
                🇰🇷 {language === 'zh-TW' ? t('couple.groom.hanja') : t('couple.groom')}
              </h3>
              <button
                onClick={() => setSelectedContact('groom')}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-traditional-gold/20 hover:bg-traditional-gold/30 border-2 border-traditional-gold/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="신랑 연락처"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-traditional-darkBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
            {language === 'zh-TW' && (
              <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown/70 mb-1 md:mb-2">
                {t('couple.groom.korean')}
              </p>
            )}
            {language === 'ko' && (
              <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown mb-1 md:mb-2">
                {t('couple.groom.hanja')}
              </p>
            )}
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base mb-1">
              {language === 'zh-TW' ? (
                <>
                  {t('couple.groom.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.father.korean')}</span>
                </>
              ) : (
                <>
                  {t('couple.groom.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.father.hanja')}</span>
                </>
              )}
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base">
              {language === 'zh-TW' ? (
                <>
                  {t('couple.groom.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.mother.korean')}</span>
                </>
              ) : (
                <>
                  {t('couple.groom.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.groom.mother.hanja')}</span>
                </>
              )}
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
            <div className="flex items-center justify-center gap-1.5 mb-1 md:mb-2">
              <h3 className="font-serif text-base sm:text-lg md:text-2xl font-semibold text-traditional-darkBrown">
                🇹🇼 {language === 'zh-TW' ? t('couple.bride.hanja') : t('couple.bride')}
              </h3>
              <button
                onClick={() => setSelectedContact('bride')}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-traditional-gold/20 hover:bg-traditional-gold/30 border-2 border-traditional-gold/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="신부 연락처"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-traditional-darkBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
            {language === 'zh-TW' && (
              <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown/70 mb-1 md:mb-2">
                {t('couple.bride.korean')}
              </p>
            )}
            {language === 'ko' && (
              <p className="font-serif text-xs sm:text-sm md:text-base text-traditional-darkBrown mb-1 md:mb-2">
                {t('couple.bride.hanja')}
              </p>
            )}
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base mb-1">
              {language === 'zh-TW' ? (
                <>
                  {t('couple.bride.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.father.korean')}</span>
                </>
              ) : (
                <>
                  {t('couple.bride.father')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.father.hanja')}</span>
                </>
              )}
            </p>
            <p className="text-traditional-brown text-xs sm:text-sm md:text-base">
              {language === 'zh-TW' ? (
                <>
                  {t('couple.bride.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.mother.korean')}</span>
                </>
              ) : (
                <>
                  {t('couple.bride.mother')} <span className="font-serif text-traditional-darkBrown">{t('couple.bride.mother.hanja')}</span>
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 연락처 모달 */}
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedContact(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-traditional-paper rounded-2xl shadow-2xl border-2 border-traditional-gold/30 max-w-sm w-full p-6 md:p-8"
            >
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-traditional-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-traditional-darkBrown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-traditional-darkBrown mb-2">
                    {selectedContact === 'groom' 
                      ? (language === 'zh-TW' ? t('couple.groom.hanja') : t('couple.groom'))
                      : (language === 'zh-TW' ? t('couple.bride.hanja') : t('couple.bride'))
                    }
                  </h3>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-traditional-gold mb-6">
                    {selectedContact === 'groom' ? t('couple.groom.phone') : t('couple.bride.phone')}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedContact(null)}
                  className="w-full px-6 py-3 bg-traditional-paper hover:bg-traditional-paper/80 border-2 border-traditional-gold/30 text-traditional-darkBrown font-serif text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {t('contact.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

