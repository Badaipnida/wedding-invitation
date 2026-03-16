'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WeddingInfo() {
  const { t, language } = useLanguage()
  const [showOrderImage, setShowOrderImage] = useState(false)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl text-center mb-12 text-traditional-darkBrown"
        >
          {t('wedding.title')}
        </motion.h2>

        <div className="space-y-8">
          {/* 날짜 및 시간 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center bg-traditional-paper rounded-lg p-6 shadow-sm border border-traditional-gold/20"
          >
            <div className="mb-4">
              <p className="font-serif text-traditional-brown text-sm mb-2">{t('wedding.date')}</p>
              <p className="font-serif text-xl md:text-2xl font-semibold text-traditional-darkBrown mb-4">
                {t('wedding.date.value')}
              </p>
              <div className="mt-4 space-y-2 text-center">
                <p className="font-serif text-sm md:text-base text-traditional-darkBrown">
                  {t('wedding.ceremony.entry')}<br />
                  <span className="font-semibold">{t('wedding.ceremony.entry.time')}</span>
                </p>
                <div className="mt-6 pt-4 border-t border-traditional-gold/20 max-w-md mx-auto text-left">
                  <p className="font-serif text-sm md:text-base text-traditional-brown leading-relaxed whitespace-pre-line">
                    {t('wedding.ceremony.note')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 장소 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center bg-traditional-paper rounded-lg p-6 shadow-sm border border-traditional-gold/20"
          >
            <div className="mb-4">
              <p className="font-serif text-traditional-brown text-sm mb-2">{t('wedding.location')}</p>
              <p className="font-serif text-xl md:text-2xl font-semibold text-traditional-darkBrown mb-2">
                {t('wedding.location.name')}
              </p>
              <p className="font-serif text-traditional-brown text-base">
                {t('wedding.location.address')}
              </p>
              <p className="font-serif text-traditional-brown text-sm mt-2">
                {t('wedding.location.transport')}
              </p>
              {language === 'zh-TW' && (
                <p className="font-serif text-traditional-brown text-sm mt-3 whitespace-pre-line">
                  {t('wedding.location.address.english')}
                </p>
              )}
              <div className="mt-5 flex justify-center">
                <div className="relative w-full max-w-md h-40 md:h-52 rounded-lg overflow-hidden shadow-md border border-traditional-gold/30">
                  <Image
                    src="/koreahouse.gif"
                    alt="한국의 집 전경"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 60vw"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 예식 순서 이미지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center bg-traditional-paper rounded-lg p-6 shadow-sm border border-traditional-gold/20"
          >
            <p className="font-serif text-xl md:text-2xl font-semibold text-traditional-darkBrown mb-4">
              {t('wedding.order.title')}
            </p>
            <div className="relative w-full max-w-2xl mx-auto h-auto">
              <button
                type="button"
                onClick={() => setShowOrderImage(true)}
                className="relative w-full aspect-[3/4] md:aspect-[3/4] rounded-lg overflow-hidden shadow-md border border-traditional-gold/30 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                aria-label="예식 순서 이미지 확대"
              >
                <Image
                  src="/wedding-order.png"
                  alt="예식 순서 안내"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority={false}
                />
              </button>
            </div>
          </motion.div>
          
          {/* 예식 순서 확대 모달 */}
          <AnimatePresence>
            {showOrderImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowOrderImage(false)}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-3xl max-h-[90vh] bg-traditional-paper rounded-lg overflow-hidden shadow-2xl"
                >
                  <div className="relative w-full h-full min-h-[60vh] flex items-center justify-center">
                    <Image
                      src="/wedding-order.png"
                      alt="예식 순서 안내 확대"
                      fill
                      className="object-contain"
                      sizes="90vw"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowOrderImage(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors z-10"
                    aria-label="닫기"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

