import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { PublicHeader } from '../components/layout/PublicHeader'
import { PublicFooter } from '../components/layout/PublicFooter'
import { HeroSection } from '../features/landing/HeroSection'
import { FeaturesSection } from '../features/landing/FeaturesSection'
import { GallerySection } from '../features/landing/GallerySection'
import { CtaSection } from '../features/landing/CtaSection'
import { getGalleryItems } from '../lib/api'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  const { data: galleryItems = [] } = useQuery({
    queryKey: ['gallery'],
    queryFn: getGalleryItems,
  })

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        <PublicHeader />
        <main className="flex flex-col">
          <HeroSection />
          <FeaturesSection />
          <GallerySection items={galleryItems} />
          <CtaSection />
        </main>
        <PublicFooter />
      </div>
    </div>
  )
}
