'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Greeting() {
  const { t } = useLanguage()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-16 pb-8 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-px bg-traditional-gold mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-lg md:text-xl leading-relaxed text-traditional-darkBrown whitespace-pre-line"
          >
            {t('greeting.text')}
          </motion.p>
          <div className="w-32 h-px bg-traditional-gold mx-auto mt-6"></div>
        </div>
      </div>
    </motion.section>
  )
}

