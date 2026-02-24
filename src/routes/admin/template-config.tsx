import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '../../components/ui/Icon'
import { Toggle } from '../../components/ui/Toggle'
import { HeroImagePicker } from '../../features/admin/template-config/HeroImagePicker'
import { GalleryCategoryCheckbox } from '../../features/admin/template-config/GalleryCategoryCheckbox'
import { useTemplateConfig } from '../../hooks/useTemplateConfig'

export const Route = createFileRoute('/admin/template-config')({
  component: TemplateConfigPage,
})

const HERO_IMAGES = [
  {
    id: 'hero-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLfF_NhVbatJd15r3FDeN4YdOLWu1kfXsTwTvsBWhcJdiWxYZLa76PLLr8pYYdOrmkDFEx5xxHLv8mZhjuhBmlWXseJjYBoYW1M5e0HJxpUmOPpcXMxXISFXzxDS9Y2WZ0oRrqb28cUvuEuc1N83zhzeo4oEnlarLE6ReeUibJNCuIapakWfpqyLp5luzg2AH49SCSIWm1b32EwUW25S7wG9vxx3kpuyZ2FYRFa9hM5GnlTSgRNu7nUX1S84FT0Aex2Q1SoQMJYSUH',
    alt: 'Baby smiling in a sunlit room',
  },
  {
    id: 'hero-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD1x5BN-REz0Ktug21cL5W5JD7IBfFZinyOPhKV4oF6JzxA1rQ1js4mWZtVnul4Mo5L_mu6FUuMXpAYj5w5VmaIVdc66yqawpb5jHZer1F1JfbIrH2eXiom1HGBnMjH_H4spqrP1JvnJsC-rfxusaBDcyb0J6xqgiizPV8C9150eU6bnvZkVxlnx4_8-HNSJQFpyWDqtLu9XRHJ0hSJldVvEHEvCCmYD1c9x9TCFeEy_NgrXquvUXK2P2E07RKSa8OaP_-5Ps0Janj',
    alt: 'Abstract nature patterns and leaves',
  },
  {
    id: 'hero-3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNAlb3KUa_X9qpoBuygQd0xMLQn2gD2Vzz1HhOMLKWIBB2MObMfOCy5_JMLHXKnVbuy6rp-4P6y_RmfuwNZ_yASzVY8vRuW3IrpUvNOxm_rp2VuXxmyQNu45_d2kHCVwmpyaGe-oWmOWGu-RXsh4iFttIcQKFjsmoQNGE-qQDw_wLc3FhCmjxhTkecGD0gHq3aikd7MPkW-Tqj81kXggvDIohL7bQozDRTwJG_IpJ0M3AhWpmJ0Z1zQ4NKog3ij_g5-CP6o3VOwfz_',
    alt: 'Children playing with colorful blocks',
  },
]

const GALLERY_CATEGORIES = [
  { id: 'first-steps', name: 'First Steps', imageCount: 24, dateRange: 'March - April 2024' },
  { id: 'birthday-bash', name: 'Birthday Bash', imageCount: 42, dateRange: 'May 2024' },
  { id: 'summer-vacation', name: 'Summer Vacation', imageCount: 15, dateRange: 'July 2024' },
  { id: 'quiet-moments', name: 'Quiet Moments', imageCount: 8, dateRange: 'Misc 2024' },
]

function TemplateConfigPage() {
  const { config, isSaving, updateConfig, showToast, toastMessage } =
    useTemplateConfig()

  if (!config) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm px-6 py-4 md:px-20 lg:px-40 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/20 text-primary">
            <Icon name="auto_stories" className="text-3xl" />
          </div>
          <div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
              Sweet Memories
            </h2>
            <p className="text-xs text-slate-500">Parent Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Sarah Jenkins</p>
            <p className="text-xs text-slate-500 italic">Premium Member</p>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/30"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAZ-T8yRmrnqImhGw-m3fd_L6jFG5wUkAQLoV9fieRemGyd0BN84VEuZsAvCs-gcyIpSZ-BcuCYTdcwEQwxfX7VcG6EQorWtndZ-X2JInGazvUcaBpyiwhLkLayHpDwIWXO3pI8CYO0a_B7ZYb4kMrlSBxS7iJk_dzC0mHegPgDfQsxsWpys9XKZT8C8BraQ54BcHY5I2m1aqI4NJ04QcfChgv1NfdGg-Ld-pbDZLtSrWltbuHr6kLx6D4FmhomYlM9s3PN0W6T8OL")`,
            }}
            role="img"
            aria-label="Sarah Jenkins profile photo"
          />
        </div>
      </header>

      <main className="px-6 py-8 md:px-20 lg:px-40 flex-1">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Template Configuration
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Customize your digital memory book with ease.
            </p>
          </div>

          <section className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Icon name="style" className="text-primary" />
              Template &amp; Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Select Template
                </span>
                <div className="relative">
                  <select
                    className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark py-3 pl-4 pr-10 focus:ring-primary focus:border-primary transition-all appearance-none"
                    value={config.selectedTemplate}
                    onChange={(e) => updateConfig({ selectedTemplate: e.target.value })}
                  >
                    <option value="modern">Modern Timeline</option>
                    <option value="soft">Soft Gallery</option>
                    <option value="classic">Classic Storybook</option>
                    <option value="minimal">Minimal Keepsake</option>
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 h-[58px]">
                <div className="flex items-center gap-3">
                  <Icon name="language" className="text-slate-400" />
                  <span className="text-sm font-medium">Published Status</span>
                </div>
                <Toggle
                  id="published-toggle"
                  checked={config.isPublished}
                  onChange={(v) => updateConfig({ isPublished: v })}
                  aria-label="Published status"
                />
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Icon name="image" className="text-primary" />
              Hero Section
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Choose a primary hero image from your saved collections.
            </p>
            <HeroImagePicker
              images={HERO_IMAGES}
              selectedId={config.heroImageId}
              onSelect={(id) => updateConfig({ heroImageId: id })}
            />
          </section>

          <section className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Icon name="auto_fix_high" className="text-primary" />
              Our Story
            </h3>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Main Description
              </span>
              <textarea
                className="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary placeholder:italic resize-none"
                placeholder="Tell the story of these memories..."
                rows={4}
                value={config.description}
                onChange={(e) => updateConfig({ description: e.target.value })}
                aria-label="Main description"
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-slate-500 italic">
                  Recommended length: 200-500 words.
                </p>
                <span className="text-xs text-slate-400">
                  {config.description.length} / 1000
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mb-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Icon name="photo_library" className="text-primary" />
              Gallery Selection
            </h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">Select categories to include in the gallery</p>
              <button
                className="text-primary text-sm font-semibold hover:underline"
                onClick={() =>
                  updateConfig({
                    selectedCategories: GALLERY_CATEGORIES.map((c) => c.id),
                  })
                }
              >
                Select All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GALLERY_CATEGORIES.map((cat) => (
                <GalleryCategoryCheckbox
                  key={cat.id}
                  category={cat}
                  checked={config.selectedCategories.includes(cat.id)}
                  onChange={(id, checked) => {
                    const next = checked
                      ? [...config.selectedCategories, id]
                      : config.selectedCategories.filter((c) => c !== id)
                    updateConfig({ selectedCategories: next })
                  }}
                />
              ))}
            </div>
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mb-12">
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 transition-colors flex items-center justify-center gap-2">
              <Icon name="visibility" className="text-lg" />
              Preview
            </button>
            <button
              className="w-full sm:w-auto px-12 py-3 rounded-lg bg-primary text-slate-900 font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={isSaving}
            >
              <Icon name="cloud_upload" className="text-lg" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-2xl z-50">
          <Icon name="check_circle" className="text-primary" />
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}
    </div>
  )
}
