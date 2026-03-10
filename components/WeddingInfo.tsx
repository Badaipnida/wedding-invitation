'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WeddingInfo() {
  const { t, language } = useLanguage()
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
        </div>
      </div>
    </motion.section>
  )
}

