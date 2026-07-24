import AffiliateManager from '@/components/affiliate-manager'

export const metadata = {
  title: 'Affiliate Products - Diagram Baterai',
  description: 'Manage your affiliate products from Tokopedia',
}

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AffiliateManager />
      </div>
    </main>
  )
}
