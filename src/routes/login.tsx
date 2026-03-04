import { createFileRoute } from '@tanstack/react-router'
import { authClient } from '../lib/auth-client'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/dashboard',
      errorCallbackURL: '/login',
      disableRedirect: true,
    })

    if (data?.url) {
      window.location.assign(data.url)
      return
    }

    console.error('Google sign-in failed', error)
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Subtle Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        </div>

        <div className="relative z-10 flex w-full max-w-[1200px] flex-col px-4 md:flex-row md:items-center md:gap-12 lg:gap-24">
          {/* Left Side: Visual & Value Prop */}
          <div className="hidden flex-1 flex-col gap-8 md:flex">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Sweet Memories</h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
                Preserve your <span className="text-primary">legacy</span> for generations.
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Join thousands of families who trust Sweet Memories to archive their most precious moments in a safe, beautiful, and accessible space.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white dark:border-slate-800 rotate-[-2deg]">
                <img
                  alt="Family Memories"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANlza9Blgx8SzBicC_ibAY8q3wLqB-BRJyhQs-ZcCAhGPU_Iu8khnBZdx7_D-Hvy9_ky4X0kGjNx0goPmNT831zdbyVYx-_ZTV7kxsDzXGXnUJ6mUw-t2v5pUW_CSZVWJst_48HDBIghdIWEJ9-ABDO6-d5tl-xO3CnoOUWli331tknEd-9tN4H0pNqOqZ3V8c0V98MSSTe5fpoeVEJ4JgrJPYMniFG62ClsQddaZGmkqGi-A6i7dBF23TwxzwoitoB3W871-QV49e"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white dark:border-slate-800 rotate-[3deg] mt-8">
                <img
                  alt="Nature peace"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxqWT9qaABRCxBDbuvmzZLxDTPO9xZIzJJzy7Une9xf3UW_h0WFWW7Eg2ItCParQrGE_kcCdopqy7k_4s38VY_fLHehb621vs1Qav_20b_n2-__GvN53IeXoO2h6_7PxlPYEEP0iCQsvLDLzEYrpRzlV_ppHvzs4TQ41Ji3IH9h4b9wCAIgUZaGOERTm2Dm6EhuBE-pngRaQOh88qy415u9wvAjBCs8DfyFomaAm3t97m09Kr6zf5B9CmNJskOCoh6XM2XGTtppioT"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Login Card */}
          <div className="flex w-full flex-col items-center justify-center md:max-w-[440px]">
            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-2 md:hidden">
              <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">Sweet Memories</span>
            </div>

            <div className="w-full rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-900/50 dark:ring-1 dark:ring-slate-800 lg:p-12">
              <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Sign in to Sweet Memories</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Start preserving your family memories in seconds.</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleGoogleLogin}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span className="font-semibold">Continue with Google</span>
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-400 dark:bg-slate-900">Secure access</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    By continuing, you agree to our
                    <a className="text-primary hover:underline" href="#">Terms of Service</a> and
                    <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Footer */}
            <div className="mt-8 flex gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">lock</span>
                End-to-end encrypted
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Privacy First
              </div>
            </div>
          </div>
        </div>

        {/* Background Image for mobile/tablet aesthetic */}
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
          <img
            alt="Atmospheric Background"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD26YiQ1yWY-jdxdUg0IlJUneSXSICX9_3x2g4wLEeNBK6ke6-3gY5pg3QohBFSXiixjh425VcbFQebLomkbUVsZ2YIR0Zgqf4Z2NdwhEqqmXYRRLMQz80oJuZv2wkSxmNVnlA1MmtmBrZgj7fso08hr-oomxYtYKCtn_fjUBSMek18ZwFX-pXgYFMKLNnUwicFM2kZduDBSkTCRHcqRknTovZbVgSDel1-S9Im_00aYWuFybUKwdAw2GC2sRZTDbeMj2Yqf6e9rgkL"
          />
        </div>
      </div>
    </div>
  )
}
