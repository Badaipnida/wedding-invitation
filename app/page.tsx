'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Greeting from '@/components/Greeting'
import Couple from '@/components/Couple'
import Gallery from '@/components/Gallery'
import WeddingInfo from '@/components/WeddingInfo'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <main className="min-h-screen hanji-texture">
      <Header />
      <Greeting />
      <Couple />
      <Gallery />
      <WeddingInfo />
      <Map />
      <Footer />
    </main>
  )
}

