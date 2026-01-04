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
                  {t('wedding.ceremony.family')}<br />
                  <span className="font-semibold">{t('wedding.ceremony.family.time')}</span>
                </p>
                <p className="font-serif text-sm md:text-base text-traditional-darkBrown">
                  {t('wedding.ceremony.friends')}<br />
                  <span className="font-semibold">{t('wedding.ceremony.friends.time')}</span>
                </p>
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
              <p className="font-serif text-xl md:text-2xl font-semibold text-traditional-darkBrown mb-4">
                {t('wedding.location.name')}
              </p>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/koreahouse.gif"
                  alt="한국의 집"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md border-2 border-traditional-gold/20 max-w-full h-auto"
                  unoptimized
                />
              </div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

