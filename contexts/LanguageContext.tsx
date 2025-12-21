'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ko' | 'zh-TW'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ko: {
    // Header
    'header.title': '결혼합니다',
    'header.subtitle': '두 사람이 하나가 되는 소중한 날\n따뜻한 마음으로 축하해 주시면\n더없이 기쁘겠습니다',
    
    // Greeting
    'greeting.text': '저희의 삶에 영향을 주신 감사한 분들 앞에서\n평생 같은 길을 가기로 약속합니다.\n\n함께하는 이 길이 때로는 험하고 멀지라도,\n보내주신 축복을 등불 삼아\n지혜롭게 헤쳐나가겠습니다.\n\n저희 두 사람의 앞날을 따뜻하게 밝혀주시면\n그 감사함을 평생 잊지 않겠습니다.',
    
    // Couple
    'couple.title': '신랑 · 신부',
    'couple.groom': '이종석',
    'couple.groom.hanja': '李宗䄷',
    'couple.groom.father': '아버지 이범수',
    'couple.groom.father.hanja': '李範洙',
    'couple.groom.mother': '어머니 이경희',
    'couple.groom.mother.hanja': '李璟熙',
    'couple.bride': '곽유정',
    'couple.bride.hanja': '郭容禎',
    'couple.bride.father': '아버지 곽세걸',
    'couple.bride.father.hanja': '郭世杰',
    'couple.bride.mother': '어머니 임수연',
    'couple.bride.mother.hanja': '林秀燕',
    
    // Gallery
    'gallery.title': '함께한 시간들',
    'gallery.more': '더 보기',
    'gallery.close': '접기',
    
    // WeddingInfo
    'wedding.title': '예식 안내',
    'wedding.date': '예식일시',
    'wedding.date.value': '2026년 3월 21일(토)',
    'wedding.ceremony.start': '혼례 시작',
    'wedding.ceremony.time': '오후 5시',
    'wedding.ceremony.family': '가족 • 친지 입장',
    'wedding.ceremony.family.time': '오후 4시 ~',
    'wedding.ceremony.friends': '친구 • 직장동료 입장',
    'wedding.ceremony.friends.time': '오후 4시 30분 ~',
    'wedding.location': '예식장소',
    'wedding.location.name': '한국의 집 (KOREA HOUSE)',
    'wedding.location.address': '서울시 중구 퇴계로 36길 10 한국의집',
    'wedding.location.transport': '지하철 3,4호선 충무로역 3번출구 도보 2분',
    'wedding.transport.subway': '지하철',
    'wedding.transport.bus': '버스',
    'wedding.transport.car': '자가용',
    
    // Map
    'map.title': '오시는 길',
    'map.transport.subway': '지하철',
    'map.transport.bus': '버스',
    'map.transport.car': '자가용',
    'map.subway.info': '3,4호선 충무로역 3번출구 도보 2분',
    'map.bus.info': '104, 105, 140, 263, 421, 507, 604, 7011번 남산골한옥마을, 한국의집 하차',
    'map.car.info': '지하 1층 주차장 60대 수용 가능',
    
    // Footer
    'footer.thanks': '본 결혼식은 한국 전통 혼례로 진행됩니다.\n따뜻한 마음으로 함께해주시면\n감사하겠습니다.',
    'footer.copyright': '2026 Wedding Invitation, Vibe Coded by Jongseok',
  },
  'zh-TW': {
    // Header
    'header.title': '我們結婚啦',
    'header.subtitle': '誠心邀請您蒞臨這場宴會\n對我們而言，您的祝福\n勝過世上所有珍貴的禮物',
    
    // Greeting
    'greeting.text': '感謝一路陪伴我們成長的你們\n我們決定牽起彼此的手，約定走在同一條路上\n\n未來的路，也許有顛簸、也許有些遙遠\n但有了大家的祝福化作小小燈火\n\n為我們照亮前方，給予我們向前的勇氣\n這份祝福，我們將會放在心裡，珍惜一輩子。',
    
    // Couple
    'couple.title': '新郎 · 新娘',
    'couple.groom': '李宗䄷',
    'couple.groom.hanja': '李宗䄷',
    'couple.groom.korean': '이종석',
    'couple.groom.father': '父親 李範洙',
    'couple.groom.father.hanja': '李範洙',
    'couple.groom.father.korean': '이범수',
    'couple.groom.mother': '母親 李璟熙',
    'couple.groom.mother.hanja': '李璟熙',
    'couple.groom.mother.korean': '이경희',
    'couple.bride': '郭容禎',
    'couple.bride.hanja': '郭容禎',
    'couple.bride.korean': '곽유정',
    'couple.bride.father': '父親 郭世杰',
    'couple.bride.father.hanja': '郭世杰',
    'couple.bride.father.korean': '곽세걸',
    'couple.bride.mother': '母親 林秀燕',
    'couple.bride.mother.hanja': '林秀燕',
    'couple.bride.mother.korean': '임수연',
    
    // Gallery
    'gallery.title': '一起的時光',
    'gallery.more': '查看更多',
    'gallery.close': '收起',
    
    // WeddingInfo
    'wedding.title': '婚禮資訊',
    'wedding.date': '婚禮時間',
    'wedding.date.value': '2026年 03月 21日(六)',
    'wedding.ceremony.start': '婚禮開始',
    'wedding.ceremony.time': '晚間5點開宴 (韓國時間)',
    'wedding.ceremony.family': '家人親友入場',
    'wedding.ceremony.family.time': '下午4點開始',
    'wedding.ceremony.friends': '職場同事入場',
    'wedding.ceremony.friends.time': '下午4點30分開始',
    'wedding.location': '婚禮地點',
    'wedding.location.name': '韓國之家 (KOREA HOUSE)',
    'wedding.location.address': '首爾市中區退溪路36街10 韓國之家',
    'wedding.location.address.english': '10, Toegye-ro 36gil, Jung-gu, Seoul,\nA 2-minute walk from Exit 3 of Chungmuro Station (Lines 3 and 4).',
    'wedding.location.transport': '地鐵3,4號線 忠武路站 3號出口 步行2分鐘',
    'wedding.transport.subway': '地鐵',
    'wedding.transport.bus': '公車',
    'wedding.transport.car': '自用車',
    
    // Map
    'map.title': '交通方式',
    'map.transport.subway': '地鐵',
    'map.transport.bus': '公車',
    'map.transport.car': '自用車',
    'map.subway.info': '3,4號線 忠武路站 3號出口 步行2分鐘',
    'map.bus.info': '104, 105, 140, 263, 421, 507, 604, 7011號 南山谷韓屋村、韓國之家 下車',
    'map.car.info': '地下1層 停車場 可容納60輛',
    
    // Footer
    'footer.thanks': '本次宴會將以韓國傳統婚禮形式舉行\n您只要帶著好心情出門\n享受宴席平安回家就好',
    'footer.copyright': '2026 Wedding Invitation, Vibe Coded by Jongseok',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

