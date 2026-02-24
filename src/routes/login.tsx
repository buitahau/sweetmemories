import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '../components/ui/Icon'
import { GoogleIcon } from '../components/ui/GoogleIcon'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark font-display antialiased">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1200px] flex-col px-4 md:flex-row md:items-center md:gap-12 lg:gap-24">
        {/* Left side — value prop */}
        <div className="hidden flex-1 flex-col gap-8 md:flex">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-background-dark">
              <Icon name="auto_awesome" className="text-3xl font-bold" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Sweet Memories
            </h1>
          </Link>

          <div className="space-y-4">
            <h2 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
              Preserve your <span className="text-primary">legacy</span> for generations.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Join thousands of families who trust Sweet to archive their most precious moments
              in a safe, beautiful, and accessible space.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white dark:border-slate-800 rotate-[-2deg] bg-primary/10" />
            <div className="h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white dark:border-slate-800 rotate-[3deg] mt-8 bg-primary/5" />
          </div>
        </div>

        {/* Right side — login card */}
        <div className="flex w-full flex-col items-center justify-center md:max-w-[440px]">
          {/* Mobile logo */}
          <div className="mb-10 flex items-center gap-2 md:hidden">
            <Icon name="auto_awesome" className="text-primary text-4xl" />
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">Sweet</span>
          </div>

          <div className="w-full rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-900/50 dark:ring-1 dark:ring-slate-800 lg:p-12">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Sign in to Sweet
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Start preserving your family memories in seconds.
              </p>
            </div>

            <div className="space-y-4">
              <button className="group flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                <GoogleIcon className="h-5 w-5" />
                <span className="font-semibold">Continue with Google</span>
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400 dark:bg-slate-900 dark:text-slate-500">
                    Secure access
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Footer trust badges */}
          <div className="mt-8 flex gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Icon name="lock" className="text-sm" />
              End-to-end encrypted
            </div>
            <div className="flex items-center gap-1">
              <Icon name="verified_user" className="text-sm" />
              Privacy First
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
