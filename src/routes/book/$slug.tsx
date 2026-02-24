import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Icon } from '../../components/ui/Icon'
import { BookHero } from '../../features/book/BookHero'
import { BookChapter } from '../../features/book/BookChapter'
import { TabNav } from '../../features/book/TabNav'
import { getPublicBook } from '../../lib/api'

export const Route = createFileRoute('/book/$slug')({
  component: PublicBookPage,
})

function PublicBookPage() {
  const { slug } = Route.useParams()

  const { data: book, isLoading, isError } = useQuery({
    queryKey: ['publicBook', slug],
    queryFn: () => getPublicBook(slug),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="size-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (isError || !book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <Icon name="error" className="text-5xl text-slate-400 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Memory Book Not Found</h1>
          <p className="text-slate-500">The memory book you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
          <div className="size-6 text-primary">
            <Icon name="auto_awesome" className="text-3xl text-primary" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight serif-title">Sweet</h2>
        </div>

        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9" aria-label="Public book navigation">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#gallery">
              Gallery
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#timeline">
              Timeline
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
              About
            </a>
          </nav>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105">
            Sign In
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-[1100px] px-4 md:px-10 py-8">
          <BookHero
            title={book.title}
            subtitle={book.subtitle}
            heroImage={book.heroImage}
            introText={book.introText}
          />

          <TabNav tabs={book.tabs} />

          {book.chapters.map((chapter) => (
            <BookChapter key={chapter.id} chapter={chapter} />
          ))}

          <div className="border-t border-primary/10 py-20 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6">
              <Icon name="favorite" className="text-primary text-4xl" filled />
            </div>
            <h3 className="text-2xl font-bold serif-title mb-4">
              Add your love to {book.title.split("'s")[0]}&apos;s journey
            </h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              {book.heartCount} family members have already left a heart.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95">
              Leave a Heart
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-background-dark/80 py-10 px-6 border-t border-primary/5">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="auto_awesome" className="text-primary" />
            <span className="font-bold serif-title">Sweet Memories</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact
            </a>
          </div>
          <p className="text-sm text-slate-400">&copy; 2024 Sweet. Built for generations.</p>
        </div>
      </footer>
    </div>
  )
}
