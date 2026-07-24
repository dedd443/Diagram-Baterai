'use client'

import { useState } from 'react'
import { Plus, Trash2, Copy, Check } from 'lucide-react'

interface ProductInput {
  name: string
  price: string
  rating: string
  reviews: string
  link: string
  category: string
  image?: string
}

export default function AffiliateImportForm() {
  const [products, setProducts] = useState<ProductInput[]>([
    { name: '', price: '', rating: '', reviews: '', link: '', category: 'battery', image: '' }
  ])
  const [copied, setCopied] = useState<boolean>(false)
  const [importCode, setImportCode] = useState<string>('')

  const addProduct = () => {
    setProducts([...products, { name: '', price: '', rating: '', reviews: '', link: '', category: 'battery', image: '' }])
  }

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index))
  }

  const updateProduct = (index: number, field: keyof ProductInput, value: string) => {
    const updated = [...products]
    updated[index][field] = value
    setProducts(updated)
  }

  const generateCode = () => {
    const code = `
// Salin kode ini ke lib/affiliate-types.ts - AFFILIATE_PRODUCTS array

${products
  .filter(p => p.name && p.link)
  .map((p, i) => {
    const timestamp = Date.now()
    return `{
    id: 'product-${timestamp}-${i}',
    name: '${p.name}',
    price: ${parseInt(p.price) || 0},
    rating: ${parseFloat(p.rating) || 4.5},
    reviews: ${parseInt(p.reviews) || 100},
    image: '${p.image || '/images/placeholder.png'}',
    category: '${p.category}',
    link: '${p.link}',
    affiliateCode: 'PLTS-${p.category.toUpperCase()}-${timestamp}-${i}',
  },`
  })
  .join('\n')}
    `
    setImportCode(code)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(importCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Import Produk Affiliate</h2>
        <p className="text-muted-foreground mb-6">
          Tambahkan produk dari Tokopedia showcase Anda di sini. Isi semua field dan klik "Generate Code" untuk mendapatkan kode yang dapat di-paste ke database.
        </p>

        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground">Produk {index + 1}</span>
                {products.length > 1 && (
                  <button
                    onClick={() => removeProduct(index)}
                    className="p-1 hover:bg-destructive hover:text-destructive-foreground rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block">Nama Produk *</label>
                  <input
                    type="text"
                    placeholder="e.g. Baterai LiFePO4 100Ah 48V"
                    value={product.name}
                    onChange={(e) => updateProduct(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block">Harga (Rp) *</label>
                  <input
                    type="number"
                    placeholder="8500000"
                    value={product.price}
                    onChange={(e) => updateProduct(index, 'price', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block">Rating (0-5) *</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="4.9"
                    value={product.rating}
                    onChange={(e) => updateProduct(index, 'rating', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block">Jumlah Review *</label>
                  <input
                    type="number"
                    placeholder="512"
                    value={product.reviews}
                    onChange={(e) => updateProduct(index, 'reviews', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block">Kategori *</label>
                  <select
                    value={product.category}
                    onChange={(e) => updateProduct(index, 'category', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="solar-panel">Solar Panel</option>
                    <option value="battery">Baterai</option>
                    <option value="scc">Charge Controller</option>
                    <option value="inverter">Inverter</option>
                    <option value="load">Aksesori</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block">Link Tokopedia *</label>
                  <input
                    type="url"
                    placeholder="https://tokopedia.link/..."
                    value={product.link}
                    onChange={(e) => updateProduct(index, 'link', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-semibold mb-1 block">URL Gambar Produk (opsional)</label>
                  <input
                    type="url"
                    placeholder="/images/product-name.png"
                    value={product.image}
                    onChange={(e) => updateProduct(index, 'image', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addProduct}
          className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <Plus className="w-4 h-4" />
          Tambah Produk Lagi
        </button>
      </div>

      {/* Generate Code Section */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <button
          onClick={generateCode}
          disabled={products.filter(p => p.name && p.link).length === 0}
          className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Import Code
        </button>

        {importCode && (
          <div className="space-y-3">
            <div className="bg-background border border-border rounded p-4">
              <pre className="text-xs overflow-x-auto max-h-96 text-muted-foreground">
                <code>{importCode}</code>
              </pre>
            </div>

            <button
              onClick={copyToClipboard}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Code
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground bg-muted p-3 rounded">
              💡 Tempel kode di atas ke dalam array AFFILIATE_PRODUCTS di file <code>lib/affiliate-types.ts</code>, lalu refresh halaman untuk melihat produk baru Anda.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
