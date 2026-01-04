'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

// 갤러리 이미지 (1~18)
const allGalleryImages = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  placeholder: `사진 ${i + 1}`,
}))

export default function Gallery() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)
  
  // 스와이프 네비게이션을 위한 상태
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  
  // 최소 스와이프 거리 (픽셀)
  const minSwipeDistance = 50

  // 처음에는 1~9만 보이고, 더 보기 클릭 시 10~18도 표시
  const displayedImages = showMore ? allGalleryImages : allGalleryImages.slice(0, 9)

  // 이전 이미지로 이동
  const goToPrevious = useCallback(() => {
    setSelectedImage((current) => {
      if (current && current > 1) {
        return current - 1
      } else if (current === 1) {
        return 18 // 마지막 이미지로 순환
      }
      return current
    })
  }, [])

  // 다음 이미지로 이동
  const goToNext = useCallback(() => {
    setSelectedImage((current) => {
      if (current && current < 18) {
        return current + 1
      } else if (current === 18) {
        return 1 // 첫 이미지로 순환
      }
      return current
    })
  }, [])

  // 터치 시작
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  // 터치 이동
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // 터치 종료 및 스와이프 처리
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // 마우스 드래그 처리
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false)
    setTouchStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart !== null) {
      setIsDragging(true)
      setTouchEnd(e.clientX)
    }
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setTouchStart(null)
      setTouchEnd(null)
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(null)
    setTouchEnd(null)
    setIsDragging(false)
  }

  // 키보드 화살표 키로 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, goToPrevious, goToNext])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-8 pb-16 bg-traditional-paper/50"
    >
      {/* 3x3 그리드 컨테이너 */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {/* 처음 9개 사진 (항상 표시) */}
          {allGalleryImages.slice(0, 9).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              onClick={() => setSelectedImage(image.id)}
              className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md border-2 border-traditional-gold/20 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <Image
                src={`/pic_${image.id}.jpg`}
                alt={`갤러리 ${image.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </motion.div>
          ))}

          {/* 10~18번 사진 (더 보기 클릭 시 펼쳐짐) */}
          <AnimatePresence>
            {showMore && (
              <>
                {allGalleryImages.slice(9, 18).map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                    onClick={() => setSelectedImage(image.id)}
                    className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md border-2 border-traditional-gold/20 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  >
                    <Image
                      src={`/pic_${image.id}.jpg`}
                      alt={`갤러리 ${image.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* 더 보기 / 접기 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-traditional-gold/10 hover:bg-traditional-gold/20 border-2 border-traditional-gold/30 rounded-full text-traditional-darkBrown font-serif text-base md:text-lg transition-all duration-300"
          >
            {showMore ? t('gallery.close') : t('gallery.more')}
          </motion.button>
        </motion.div>
      </div>

      {/* 확대 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                if (!isDragging) {
                  e.stopPropagation()
                }
              }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-traditional-beige rounded-lg overflow-hidden shadow-2xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <div 
                ref={imageContainerRef}
                className="relative w-full h-full min-h-[50vh] flex items-center justify-center select-none"
              >
                {selectedImage && selectedImage >= 1 && selectedImage <= 18 ? (
                  <Image
                    key={selectedImage}
                    src={`/pic_${selectedImage}.jpg`}
                    alt={`갤러리 ${selectedImage}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    unoptimized={false}
                    draggable={false}
                  />
                ) : (
                  <div className="w-full h-full bg-traditional-beige flex items-center justify-center">
                    <span className="text-traditional-brown/60 text-lg md:text-xl">
                      {allGalleryImages.find(img => img.id === selectedImage)?.placeholder}
                    </span>
                  </div>
                )}
              </div>
              
              {/* 이전 버튼 */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-traditional-darkBrown hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 z-10 shadow-lg"
                aria-label="이전 이미지"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* 다음 버튼 */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-traditional-darkBrown hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 z-10 shadow-lg"
                aria-label="다음 이미지"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* 닫기 버튼 */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors z-10"
                aria-label="닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 이미지 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-serif z-10">
                {selectedImage} / 18
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

