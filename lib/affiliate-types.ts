export interface AffiliateProduct {
  id: string
  name: string
  description?: string
  price: number
  image: string
  link: string
  source: 'tokopedia' | 'tiktok-shop' | 'shopee' | 'lazada'
  category: 'solar-panel' | 'battery' | 'scc' | 'inverter' | 'load' | 'other'
  rating?: number
  reviews?: number
  isActive: boolean
  lastUpdated: string
  createdAt: string
}

export interface AffiliateLink {
  id: string
  productId: string
  affiliateCode: string
  url: string
  source: string
  commission?: number
  isActive: boolean
  createdAt: string
  lastUpdated: string
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  // Solar Panel Products
  {
    id: 'aff-solar-1',
    name: 'Panel Surya 200W Monocrystalline',
    description: 'Solar panel 200W high efficiency monocrystalline',
    price: 1890000,
    image: '/images/solar-panel-200w.png',
    link: 'https://www.tokopedia.com/search?q=panel+surya+200w',
    source: 'tokopedia',
    category: 'solar-panel',
    rating: 4.8,
    reviews: 342,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-solar-2',
    name: 'Panel Surya 100W Polycrystalline',
    description: 'Solar panel 100W polycrystalline efficient',
    price: 950000,
    image: '/images/solar-panel-100w.png',
    link: 'https://www.tokopedia.com/search?q=panel+surya+100w',
    source: 'tokopedia',
    category: 'solar-panel',
    rating: 4.6,
    reviews: 289,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-solar-3',
    name: 'Panel Surya Fleksibel 150W',
    description: 'Flexible solar panel 150W portable',
    price: 1450000,
    image: '/images/solar-panel-flexible.png',
    link: 'https://www.tokopedia.com/search?q=panel+surya+fleksibel',
    source: 'tokopedia',
    category: 'solar-panel',
    rating: 4.7,
    reviews: 156,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },

  // Battery Products
  {
    id: 'aff-batt-1',
    name: 'Baterai LiFePO4 100Ah 48V',
    description: 'LiFePO4 battery 100Ah 48V high capacity',
    price: 8500000,
    image: '/images/battery-lifepo4-100ah.png',
    link: 'https://www.tokopedia.com/search?q=baterai+lifepo4+100ah',
    source: 'tokopedia',
    category: 'battery',
    rating: 4.9,
    reviews: 512,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-batt-2',
    name: 'Baterai Lead Acid 200Ah 12V',
    description: 'Lead acid battery 200Ah 12V solar system',
    price: 3200000,
    image: '/images/battery-lead-acid.png',
    link: 'https://www.tokopedia.com/search?q=baterai+lead+acid+200ah',
    source: 'tokopedia',
    category: 'battery',
    rating: 4.5,
    reviews: 423,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-batt-3',
    name: 'Baterai GEL 150Ah Solar',
    description: 'GEL battery 150Ah for solar system',
    price: 4500000,
    image: '/images/battery-gel-solar.png',
    link: 'https://www.tokopedia.com/search?q=baterai+gel+solar+150ah',
    source: 'tokopedia',
    category: 'battery',
    rating: 4.7,
    reviews: 267,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-batt-4',
    name: 'Baterai LiFePO4 200Ah 24V',
    description: 'LiFePO4 battery 200Ah 24V premium',
    price: 12000000,
    image: '/images/battery-lifepo4-200ah.png',
    link: 'https://www.tokopedia.com/search?q=baterai+lifepo4+200ah',
    source: 'tokopedia',
    category: 'battery',
    rating: 4.8,
    reviews: 378,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },

  // Charge Controller
  {
    id: 'aff-scc-1',
    name: 'Solar Charge Controller MPPT 80A',
    description: 'MPPT solar charge controller 80A high efficiency',
    price: 2800000,
    image: '/images/mppt-controller-80a.png',
    link: 'https://www.tokopedia.com/search?q=solar+charge+controller+mppt+80a',
    source: 'tokopedia',
    category: 'scc',
    rating: 4.8,
    reviews: 289,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-scc-2',
    name: 'Solar Controller PWM 60A',
    description: 'PWM solar controller 60A reliable',
    price: 1200000,
    image: '/images/pwm-controller-60a.png',
    link: 'https://www.tokopedia.com/search?q=solar+controller+pwm+60a',
    source: 'tokopedia',
    category: 'scc',
    rating: 4.6,
    reviews: 198,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-scc-3',
    name: 'MPPT Hybrid Controller 100A',
    description: 'Hybrid MPPT controller 100A advanced',
    price: 3500000,
    image: '/images/mppt-hybrid-100a.png',
    link: 'https://www.tokopedia.com/search?q=mppt+hybrid+controller+100a',
    source: 'tokopedia',
    category: 'scc',
    rating: 4.7,
    reviews: 245,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },

  // Inverter
  {
    id: 'aff-inv-1',
    name: 'Inverter 5000W Pure Sine Wave',
    description: '5000W pure sine wave power inverter',
    price: 4200000,
    image: '/images/inverter-5000w.png',
    link: 'https://www.tokopedia.com/search?q=inverter+5000w+pure+sine',
    source: 'tokopedia',
    category: 'inverter',
    rating: 4.8,
    reviews: 356,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-inv-2',
    name: 'Inverter 3000W Modified Sine',
    description: '3000W modified sine wave inverter',
    price: 2100000,
    image: '/images/inverter-3000w.png',
    link: 'https://www.tokopedia.com/search?q=inverter+3000w',
    source: 'tokopedia',
    category: 'inverter',
    rating: 4.5,
    reviews: 267,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-inv-3',
    name: 'Inverter 8000W Hybrid 48V',
    description: '8000W 48V hybrid power inverter',
    price: 6500000,
    image: '/images/inverter-8000w-hybrid.png',
    link: 'https://www.tokopedia.com/search?q=inverter+8000w+hybrid',
    source: 'tokopedia',
    category: 'inverter',
    rating: 4.9,
    reviews: 423,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },

  // Accessories/Loads
  {
    id: 'aff-load-1',
    name: 'LED Bulb Solar 12W Warm White',
    description: '12W warm white LED solar bulb',
    price: 45000,
    image: '/images/led-solar-bulb.png',
    link: 'https://www.tokopedia.com/search?q=led+solar+bulb+12w',
    source: 'tokopedia',
    category: 'load',
    rating: 4.7,
    reviews: 1205,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-load-2',
    name: 'Solar Charge Controller Meter Display',
    description: 'LCD meter display for solar controller',
    price: 180000,
    image: '/images/controller-meter.png',
    link: 'https://www.tokopedia.com/search?q=solar+controller+display',
    source: 'tokopedia',
    category: 'load',
    rating: 4.6,
    reviews: 312,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aff-load-3',
    name: 'MC4 Connector Kit Solar',
    description: 'Solar MC4 connector kit complete',
    price: 95000,
    image: '/images/mc4-connector-kit.png',
    link: 'https://www.tokopedia.com/search?q=mc4+connector+solar',
    source: 'tokopedia',
    category: 'load',
    rating: 4.8,
    reviews: 789,
    isActive: true,
    lastUpdated: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
]

export const AFFILIATE_LINKS: AffiliateLink[] = AFFILIATE_PRODUCTS.map((product) => ({
  id: `link-${product.id}`,
  productId: product.id,
  affiliateCode: `PLTS-${product.category.toUpperCase()}-${Date.now()}`,
  url: product.link,
  source: product.source,
  commission: 5, // 5% default commission
  isActive: product.isActive,
  createdAt: product.createdAt,
  lastUpdated: product.lastUpdated,
}))
