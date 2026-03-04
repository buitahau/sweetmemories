import { useTheme } from '../providers/ThemeProvider'

export default function ThemeToggle() {
  const { mode, setMode } = useTheme()

  function toggleMode() {
    const nextMode =
      mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light'
    setMode(nextMode)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', nextMode)
    }
  }

  const label =
    mode === 'auto'
      ? 'Theme mode: auto (system). Click to switch to light mode.'
      : `Theme mode: ${mode}. Click to switch mode.`

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="rounded-xl px-4 py-2 text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
    >
      {mode === 'auto' ? (
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base">
            brightness_auto
          </span>
          Auto
        </span>
      ) : mode === 'dark' ? (
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base">dark_mode</span>
          Dark
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base">
            light_mode
          </span>
          Light
        </span>
      )}
    </button>
  )
}
