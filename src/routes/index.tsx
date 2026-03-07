import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const carouselAvatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoTUeeOJo4mNALTnO4x2Vm7-9tbLQYps3RTMmu5e56xsvhjJ9PaZtPIwgj3rDsguI1sGkwG9qkXN_ZRisnY7XQA1V9KekEjkRlJ4wDYfHewwp4VPbQCSrcikNQC-i_ewMO2GSEkCdr0ySTvEVjr5Wf8kgS3DPAXQQ5G45-ZmCaEIjMMWV79n4fIz707Ezm0bpZJsnXOQuorFpvKCJSZLZxP7mpXuoULDsYzwvZ1KvP91l9Gs7ZLsXIkqfemJ-0DagRmClRW4ab3d7',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBB-tJ7upQzSGLbRZr6Z8AiXOHExBJjfLFiPJ-J5ruL8eyOJ-7WtvIPr6J6sw3Dr0zqpjeQbzt9lmPQD572FDhAITOKrYQl7W4NAUb7x88PoEVnUuqGQzU8SpLLd9WWSz3WlOBpOSrRhihz4LLRi_Eh_gfoGgpAC5eTDksuQcQL7-vuYDKPjIa_izyA-Z55JYIdXOuxYID8cUNmD0zDDyyJdcjPltcLoYpSW7OnJqYnbo4vCutRoPhBFO68eL9fT4psbj36zg6We6Oy',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCCC8sU1dkaOLIIN2GPkSrXIz0TSGUKRkMRrIhedhw4shYX1mjstdK_5v35bLw03AxWDNlu1e_CS9Dhubq5N47YYYq578kCS62iu0IlRaWRZYW-6O1_E5U2pvE6ibm0lp8uVhf1sI4oD4_3BxxmyGp-YeMzoh-Mq4byRZgkUjxeR49azOgsKYWPqrRzEEFgEp9GcA42D999ZOcGTJrsuGJ8014TDPlLw6HLQrqfCk3kWmo6WNRC2ZQv4gp-02xkf1n3t_Ki9fU3Yne4',
]

const galleryCards = [
  {
    title: "Baby's First Steps",
    caption: 'Stored securely forever',
    gradient: 'from-pink-200 via-purple-200 to-blue-200',
  },
  {
    title: 'Summer Vacations',
    caption: 'Shared privately with relatives',
    gradient: 'from-orange-200 via-pink-200 to-amber-100',
  },
  {
    title: 'Holiday Traditions',
    caption: 'Organized automatically by year',
    gradient: 'from-sky-200 via-cyan-200 to-emerald-200',
  },
]

function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Header variant="landing" />
        <main className="flex flex-col">
          <section className="px-6 md:px-20 py-12 md:py-24">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                    Preserve the moments that matter, <span className="text-primary">without the stress.</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                    A simple, private website for your family's memories. No passwords, no tech friction. Just pure storytelling.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login">
                    <button className="flex items-center justify-center gap-3 rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.20-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.70 23 12 23z" fill="currentColor" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.70 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.60 3.30-4.53 6.16-4.53z" fill="currentColor" />
                      </svg>
                      <span>Start with Google</span>
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="flex items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                      Learn More
                    </button>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {carouselAvatars.map((src) => (
                      <div key={src} className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden">
                        <img alt="User" className="w-full h-full object-cover" src={src} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500">Trusted by 2,000+ families</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    alt="Family memory"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIO5LOFfqdELhJezYLajeya5yE9xuv8CTPZlsNhfOtbKmovwXnaMs0tKt_QH-eAue0EuH8639kg-WThK7cuuG204ftTsjSoVivghLqVn-oJ9Ya8UeL5PA95AsCwxmO3_H-HYFv2DAdFhOkCZOWRorAmTnja850CVKCxhfUuPBGHjvF9Bl5fPf0ULbfVuXZ1t1XWyTBOiDLoee5Uzgw3Aqg__8edsAi2AbzALiknBuEOYnqnsXw8eXKWmDoGAqh7uNwW11E4ZX0rOB"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl -rotate-6 hidden md:block">
                  <img
                    alt="Baby steps"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwBs4HsmVE-KpBlL8oXUNpHV9qShdpnsFXoUDU7GLRjFIzRZZcnxk6Mam97zC2TpX_7q6uBsD2oPntnNkj1t_fHbaB9dx_w8LugppwEEsJUbAJobw8YcQfXGHxfq8rUwZP7mEXptQC0vKrI5UNBMs4QLMndCSPR0sosCzJdSEwO_LynI8XYR6tWgU246C_gzJ0tGOxcS5UKGXcwPfbWlkIihmWw2wqQOdVOZuEvdgNpDBzeujMva4FG_RmOQS2GWxD6duz07gYydJw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-20 py-20 bg-background-light dark:bg-background-dark/50">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center max-w-[800px] mx-auto">
                <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-5xl font-bold leading-tight">Designed for simplicity</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">We removed the friction so you can focus on what actually matters: your family's story.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
                  icon: 'passkey',
                  title: 'Sign in with Google',
                  body: 'Fast onboarding with no new passwords to remember. One click and you\'re in.',
                }, {
                  icon: 'language',
                  title: 'Your Own Private Site',
                  body: 'Every family gets a beautiful, auto-generated subdomain. Private by default, shareable by choice.',
                }, {
                  icon: 'auto_fix_high',
                  title: 'Simple Organization',
                  body: 'Limited choices means zero overwhelm for you and your kin. We organize, you enjoy.',
                }].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-8 hover:shadow-xl transition-shadow group shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-base leading-normal">{feature.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-900/50">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8">
                  <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-5xl font-bold leading-tight">
                    Save Little Moments in Under a Minute
                  </h2>
                  <div className="flex flex-col gap-6">
                    {['Sign in with Google in seconds', 'Choose a beautiful template', 'Pick the photos you love most', 'Share your family memory and enjoy it forever'].map((copy) => (
                      <div key={copy} className="flex items-start gap-4">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-sm font-bold">check</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img
                      alt="Family memory collage"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIO5LOFfqdELhJezYLajeya5yE9xuv8CTPZlsNhfOtbKmovwXnaMs0tKt_QH-eAue0EuH8639kg-WThK7cuuG204ftTsjSoVivghLqVn-oJ9Ya8UeL5PA95AsCwxmO3_H-HYFv2DAdFhOkCZOWRorAmTnja850CVKCxhfUuPBGHjvF9Bl5fPf0ULbfVuXZ1t1XWyTBOiDLoee5Uzgw3Aqg__8edsAi2AbzALiknBuEOYnqnsXw8eXKWmDoGAqh7uNwW11E4ZX0rOB"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-20 py-24">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex justify-between items-end mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Capturing every milestone</h2>
                  <p className="text-slate-500">Beautifully stored, easily revisited.</p>
                </div>
                <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:underline">
                  See all examples <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryCards.map((card) => (
                  <div key={card.title} className="flex flex-col gap-4 group">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden">
                      <div
                        className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${card.gradient} transition-transform duration-500 group-hover:scale-105`}
                      >
                        <span className="material-symbols-outlined text-6xl text-slate-400">photo_camera</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-slate-50 text-lg font-bold">{card.title}</p>
                      <p className="text-slate-500 text-sm">{card.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 md:px-20 py-20 bg-background-dark text-slate-100 rounded-[2rem] mx-6 md:mx-20 mb-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]"></div>
            <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col gap-8 items-center">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Ready to start your family's digital heirloom?</h2>
              <p className="text-slate-400 text-lg md:text-xl">Join thousands of families who are preserving their history without the digital clutter.</p>
              <Link to="/login">
                <button className="flex items-center justify-center gap-3 rounded-xl h-14 px-10 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-all">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.20-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.70 23 12 23z" fill="currentColor" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.70 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.60 3.30-4.53 6.16-4.53z" fill="currentColor" />
                  </svg>
                  <span>Start with Google</span>
                </button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
