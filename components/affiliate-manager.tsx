'use client'

import { useState } from 'react'
import { ExternalLink, Copy, Check, Trash2, Eye, EyeOff } from 'lucide-react'
import { AFFILIATE_PRODUCTS, AFFILIATE_LINKS, AffiliateProduct } from '@/lib/affiliate-types'

export default function AffiliateManager() {
  const [products, setProducts] = useState<AffiliateProduct[]>(AFFILIATE_PRODUCTS.filter(p => p.isActive))
  const [filter, setFilter] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'all' || product.category === filter
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCopyLink = (productId: string, link: string) => {
    navigator.clipboard.writeText(link)
    setCopiedId(productId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleRemoveProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'solar-panel', label: 'Solar Panel' },
    { id: 'battery', label: 'Baterai' },
    { id: 'scc', label: 'Charge Controller' },
    { id: 'inverter', label: 'Inverter' },
    { id: 'load', label: 'Aksesori' },
  ]

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-card-foreground">Affiliate Products</h1>
          <p className="text-muted-foreground mt-1">Kelola produk afiliasi Tokopedia Anda</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background border border-border text-foreground hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => {
            const affiliateLink = AFFILIATE_LINKS.find(l => l.productId === product.id)
            const isCopied = copiedId === product.id

            return (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <div className="relative h-40 bg-muted overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement
                      img.style.display = 'none'
                      const parent = img.parentElement
                      if (parent) parent.textContent = product.name.charAt(0)
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Name */}
                  <h3 className="font-semibold text-card-foreground line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-background rounded border border-border text-muted-foreground">
                      {product.source}
                    </span>
                    <span className="text-xs px-2 py-1 bg-accent bg-opacity-50 rounded text-accent-foreground">
                      {product.category}
                    </span>
                  </div>

                  {/* Affiliate Link Display */}
                  {affiliateLink && (
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground font-semibold">Affiliate Code:</p>
                      <code className="block w-full text-xs bg-background border border-border rounded px-2 py-1 truncate text-foreground">
                        {affiliateLink.affiliateCode}
                      </code>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => handleCopyLink(product.id, product.link)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Disalin
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Salin Link
                        </>
                      )}
                    </button>

                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent bg-opacity-50 text-accent-foreground rounded-lg hover:bg-opacity-70 transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buka
                    </a>

                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="px-3 py-2 bg-destructive bg-opacity-10 text-destructive rounded-lg hover:bg-opacity-20 transition-all"
                      title="Hapus produk"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Last Updated */}
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                    Update: {new Date(product.lastUpdated).toLocaleDateString('id-ID')}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Tidak ada produk yang cocok</p>
        </div>
      )}

      {/* Summary */}
      <div className="bg-background border border-border rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">{filteredProducts.length}</p>
            <p className="text-sm text-muted-foreground">Produk Aktif</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">
              {(filteredProducts.reduce((sum, p) => sum + p.price, 0) / 1000000).toFixed(1)}M
            </p>
            <p className="text-sm text-muted-foreground">Total Nilai</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">
              {(filteredProducts.reduce((sum, p) => sum + p.reviews, 0) / 1000).toFixed(1)}K
            </p>
            <p className="text-sm text-muted-foreground">Total Review</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">
              {(filteredProducts.reduce((sum, p) => sum + p.rating, 0) / filteredProducts.length).toFixed(1)}
            </p>
            <p className="text-sm text-muted-foreground">Rating Rata-rata</p>
          </div>
        </div>
      </div>
    </div>
  )
}
