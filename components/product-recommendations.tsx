'use client'

import { Star, ShoppingCart, ExternalLink } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
  link: string
}

const TIKTOK_PRODUCTS: Product[] = [
  // Solar Panel Products
  {
    id: 'solar-1',
    name: 'Panel Surya 200W Monocrystalline',
    price: 1890000,
    rating: 4.8,
    reviews: 342,
    image: '🔆',
    category: 'solar-panel',
    link: '#',
  },
  {
    id: 'solar-2',
    name: 'Panel Surya 100W Polycrystalline',
    price: 950000,
    rating: 4.6,
    reviews: 289,
    image: '☀️',
    category: 'solar-panel',
    link: '#',
  },
  {
    id: 'solar-3',
    name: 'Panel Surya Fleksibel 150W',
    price: 1450000,
    rating: 4.7,
    reviews: 156,
    image: '🌞',
    category: 'solar-panel',
    link: '#',
  },

  // Battery Products
  {
    id: 'batt-1',
    name: 'Baterai LiFePO4 100Ah 48V',
    price: 8500000,
    rating: 4.9,
    reviews: 512,
    image: '🔋',
    category: 'battery',
    link: '#',
  },
  {
    id: 'batt-2',
    name: 'Baterai Lead Acid 200Ah 12V',
    price: 3200000,
    rating: 4.5,
    reviews: 423,
    image: '🔌',
    category: 'battery',
    link: '#',
  },
  {
    id: 'batt-3',
    name: 'Baterai GEL 150Ah Solar',
    price: 4500000,
    rating: 4.7,
    reviews: 267,
    image: '⚡',
    category: 'battery',
    link: '#',
  },
  {
    id: 'batt-4',
    name: 'Baterai LiFePO4 200Ah 24V',
    price: 12000000,
    rating: 4.8,
    reviews: 378,
    image: '🔋',
    category: 'battery',
    link: '#',
  },

  // Charge Controller
  {
    id: 'scc-1',
    name: 'Solar Charge Controller MPPT 80A',
    price: 2800000,
    rating: 4.8,
    reviews: 289,
    image: '⚙️',
    category: 'scc',
    link: '#',
  },
  {
    id: 'scc-2',
    name: 'Solar Controller PWM 60A',
    price: 1200000,
    rating: 4.6,
    reviews: 198,
    image: '🔧',
    category: 'scc',
    link: '#',
  },
  {
    id: 'scc-3',
    name: 'MPPT Hybrid Controller 100A',
    price: 3500000,
    rating: 4.7,
    reviews: 245,
    image: '⚡',
    category: 'scc',
    link: '#',
  },

  // Inverter
  {
    id: 'inv-1',
    name: 'Inverter 5000W Pure Sine Wave',
    price: 4200000,
    rating: 4.8,
    reviews: 356,
    image: '📡',
    category: 'inverter',
    link: '#',
  },
  {
    id: 'inv-2',
    name: 'Inverter 3000W Modified Sine',
    price: 2100000,
    rating: 4.5,
    reviews: 267,
    image: '🔌',
    category: 'inverter',
    link: '#',
  },
  {
    id: 'inv-3',
    name: 'Inverter 8000W Hybrid 48V',
    price: 6500000,
    rating: 4.9,
    reviews: 423,
    image: '⚡',
    category: 'inverter',
    link: '#',
  },

  // Load/Accessories
  {
    id: 'load-1',
    name: 'LED Bulb Solar 12W Warm White',
    price: 45000,
    rating: 4.7,
    reviews: 1205,
    image: '💡',
    category: 'load',
    link: '#',
  },
  {
    id: 'load-2',
    name: 'Solar Charge Controller Meter Display',
    price: 180000,
    rating: 4.6,
    reviews: 312,
    image: '📊',
    category: 'load',
    link: '#',
  },
  {
    id: 'load-3',
    name: 'MC4 Connector Kit Solar',
    price: 95000,
    rating: 4.8,
    reviews: 789,
    image: '🔗',
    category: 'load',
    link: '#',
  },
]

interface ProductRecommendationsProps {
  searchQuery: string
  activeCategory?: string
}

export default function ProductRecommendations({
  searchQuery,
  activeCategory,
}: ProductRecommendationsProps) {
  const filteredProducts = TIKTOK_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory
      ? product.category === activeCategory
      : true

    const hasGoodRating = product.rating >= 4.0

    return matchesSearch && matchesCategory && hasGoodRating
  })

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.round(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (filteredProducts.length === 0) {
    return null
  }

  return (
    <div className="p-3 space-y-3 max-h-96 overflow-y-auto">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        🛍️ Rekomendasi Produk TikTok Shop
      </div>

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-background rounded-lg p-3 border border-border hover:border-primary transition-all hover:shadow-md group cursor-pointer"
        >
          <div className="flex gap-3">
            {/* Product Image */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              {product.image}
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h4>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mt-1">
                {renderStars(product.rating)}
                <span className="text-xs text-muted-foreground">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
              <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover:opacity-100">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {filteredProducts.length > 0 && (
        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          Menampilkan {filteredProducts.length} produk dengan rating 4+ bintang
        </div>
      )}
    </div>
  )
}
