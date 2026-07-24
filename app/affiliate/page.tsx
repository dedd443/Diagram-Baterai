'use client'

import { useState } from 'react'
import AffiliateManager from '@/components/affiliate-manager'
import AffiliateImportForm from '@/components/affiliate-import-form'

export default function AffiliatePage() {
  const [activeTab, setActiveTab] = useState<'products' | 'import'>('products')

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Affiliate Products</h1>
          <p className="text-muted-foreground">Kelola produk affiliate Tokopedia Anda</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'products'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Produk Aktif
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'import'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Import Produk Baru
          </button>
        </div>

        {/* Content */}
        {activeTab === 'products' && <AffiliateManager />}
        {activeTab === 'import' && <AffiliateImportForm />}
      </div>
    </main>
  )
}
