'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Map() {
  const { t } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-traditional-paper/30"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl text-center mb-8 text-traditional-darkBrown"
        >
          {t('map.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg overflow-hidden shadow-md border border-traditional-gold/20"
        >
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4245.919008890061!2d126.99268563997819!3d37.56017641592565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca29433662bd7%3A0x540c2f813a78c49e!2z7ZWc6rWt7J2YIOynkQ!5e1!3m2!1sko!2skr!4v1766303982032!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 space-y-3 text-sm text-traditional-brown font-serif text-center"
        >
          <div>
            <span className="font-semibold">{t('map.transport.subway')}</span>
            <span className="block mt-1">{t('map.subway.info')}</span>
          </div>
          <div>
            <span className="font-semibold">{t('map.transport.bus')}</span>
            <span className="block mt-1 whitespace-pre-line">{t('map.bus.info')}</span>
          </div>
          <div>
            <span className="font-semibold">{t('map.transport.car')}</span>
            <span className="block mt-1">{t('map.car.info')}</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

