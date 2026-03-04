import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Header variant="landing" />
        <main className="flex flex-col flex-1">
          <div className="px-6 md:px-20 py-12 md:py-24">
            <div className="max-w-[800px] mx-auto">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">
                      info
                    </span>
                    About Sweet Memories
                  </div>
                  <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                    Built for families who value{' '}
                    <span className="text-primary">simplicity</span> and{' '}
                    <span className="text-primary">privacy</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                    Sweet Memories is a modern platform designed to help
                    families preserve and share their most precious moments
                    without the complexity of traditional photo management
                    tools.
                  </p>
                </div>

                <div className="card-lg">
                  <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold mb-4">
                    Our Mission
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                    We believe that preserving family memories shouldn't require
                    technical expertise or hours of organization. Sweet Memories
                    removes the friction from memory preservation, allowing you
                    to focus on what truly matters: your family's story.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    With simple Google sign-in, beautiful templates, and
                    automatic organization, we make it easy for anyone to create
                    a lasting digital legacy for their loved ones.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">lock</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold">
                        Privacy First
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Your memories are yours alone. We provide private, secure
                      storage with full control over who can access your
                      family's photos and stories.
                    </p>
                  </div>

                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">speed</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold">
                        Lightning Fast
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Built with modern web technologies for instant loading and
                      smooth interactions. Your memories are always just a click
                      away.
                    </p>
                  </div>

                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          palette
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold">
                        Beautiful Design
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Choose from carefully crafted templates that make your
                      memories look stunning without any design skills required.
                    </p>
                  </div>

                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          family_restroom
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold">
                        Family Friendly
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Designed for all ages and tech skill levels. If you can
                      use Google, you can use Sweet Memories.
                    </p>
                  </div>
                </div>

                <div className="card-lg bg-primary/5 border-primary/20">
                  <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold mb-4">
                    Technology Stack
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                    Sweet Memories is built with cutting-edge web technologies
                    to ensure the best possible experience:
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        <strong>React Start</strong> - Modern full-stack React
                        framework with SSR
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        <strong>TanStack Router</strong> - Type-safe routing
                        with excellent DX
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        <strong>Tailwind CSS</strong> - Utility-first styling
                        for rapid development
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        <strong>TypeScript</strong> - Type safety and better
                        developer experience
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
