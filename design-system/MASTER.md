# Sweet Memories — Design System
## Global Source of Truth

> **Derived from:** Analysis of all 6 HTML prototype screens:
> `choose_template`, `manage_categories`, `upload_photos`, `template_configuration`, `settings`, `public_memory_book`
>
> **Authority:** This file is the single source of truth for colors, typography, spacing, components, and interaction patterns. All pages must conform unless a `design-system/pages/<page>.md` override explicitly documents a deviation.

---

## 1. Brand Identity

| Attribute | Value |
|---|---|
| **Product Name** | Sweet Memories |
| **Tagline** | "Built for generations." |
| **Personality** | Warm, premium, family-focused, trustworthy |
| **Visual Style** | Clean minimalism with a vibrant nature-green accent; supports dark mode |

---

## 2. Color Palette

### Core Colors (Tailwind Config)

```js
colors: {
  "primary":           "#6ee619",   // Vibrant lime-green — CTA, active states, brand moments
  "background-light":  "#f7f8f6",   // Warm off-white — light mode page background
  "background-dark":   "#182111",   // Deep forest green-black — dark mode background
}
```

### Semantic Color Usage

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Page background** | `bg-background-light` (#f7f8f6) | `bg-background-dark` (#182111) | Root layout |
| **Card / Surface** | `bg-white` | `bg-slate-900/50` or `bg-slate-800` | Panels, cards |
| **Sidebar** | `bg-white` | `bg-background-dark` | Navigation |
| **Border** | `border-slate-200` | `border-slate-800` | Section dividers |
| **Primary text** | `text-slate-900` | `text-slate-100` | Headings, labels |
| **Muted text** | `text-slate-500` | `text-slate-400` | Descriptions, metadata |
| **Secondary text** | `text-slate-600` | `text-slate-300` | Body copy, secondary labels |
| **Brand accent** | `text-primary` / `bg-primary` (#6ee619) | same | CTAs, active nav, icons |
| **Danger** | `bg-red-500` / `text-red-500` | same | Delete, destructive actions |
| **Info** | `text-blue-500` / `bg-blue-500/10` | same | Stats, informational icons |

### Tint / Alpha Variants (in use across screens)

| Class | Usage |
|---|---|
| `bg-primary/5` | Dropzone hover backgrounds, subtle tints |
| `bg-primary/10` | Nav active hover, stat icon backgrounds |
| `bg-primary/20` | Hero overlay, badge backgrounds, profile bg |
| `bg-primary/30` | Stronger hover states |
| `text-primary/20` | Subtle decorative borders |
| `shadow-primary/20` | Glow shadow on CTAs |
| `ring-primary/20` | Focus ring on selected items |

---

## 3. Typography

### Font Stack

```css
/* Google Fonts Imports (used across all screens) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
```

| Role | Font | Usage |
|---|---|---|
| **UI / Display** | Inter | All admin/dashboard UI: labels, buttons, nav, body copy |
| **Editorial / Serif** | Playfair Display | Public memory book only: hero title, chapter headings, feature quotes |

```js
// Tailwind fontFamily config
fontFamily: {
  "display": ["Inter", "sans-serif"],  // All UI pages
  "serif":   ["Playfair Display", "serif"],  // Public site only
}
```

### Type Scale

| Role | Size | Weight | Class |
|---|---|---|---|
| **Page title** | 36px / 3xl | 900 Black | `text-3xl font-black tracking-tight` |
| **Section heading** | 30px / 3xl | 700 Bold | `text-3xl font-bold` |
| **Card heading** | 18px / lg | 700 Bold | `text-lg font-bold` |
| **Sub-heading** | 16px / base | 600 Semibold | `text-base font-semibold` |
| **Body / Label** | 14px / sm | 500 Medium | `text-sm font-medium` |
| **Caption / Meta** | 12px / xs | 400–700 | `text-xs` |
| **Micro badge** | 10px | 900 Black | `text-[10px] font-black uppercase tracking-wider` |
| **Public hero** | 48–60px / 4xl–6xl | 700 Bold | `text-4xl md:text-6xl font-bold serif-title italic` |
| **Public chapter** | 30px / 3xl | 700 | `text-3xl font-bold serif-title` |

### Letter Spacing

| Use | Class |
|---|---|
| Page titles | `tracking-tight` |
| Badge labels | `tracking-wider` or `tracking-widest` |
| Body | (default) |

---

## 4. Spacing System

Tailwind default scale is used. Key layout values observed:

| Context | Value | Class |
|---|---|---|
| **Page horizontal padding** | 40px → 80px → 160px | `px-6 md:px-20 lg:px-40` |
| **Page vertical padding** | 32px | `py-8` |
| **Section gap** | 24px | `mb-6` |
| **Large section gap** | 32px | `mb-8` |
| **Card padding** | 20–24px | `p-5` / `p-6` |
| **Sidebar padding** | 24px | `p-6` |
| **Header height** | 64px | `h-16` |
| **Sidebar width** | 256–288px | `w-64` / `w-72` |
| **Max content width (admin)** | 800px | `max-w-[800px] mx-auto` |
| **Max content width (public)** | 1100px | `max-w-[1100px]` |
| **Form field padding** | 12px vertical, 16px horizontal | `py-3 px-4` |
| **Button padding (primary)** | `px-8 py-3` (large) / `px-6 py-2.5` (medium) |
| **Gap between items** | 12–24px | `gap-3` / `gap-4` / `gap-6` |

---

## 5. Border Radius

```js
// Tailwind borderRadius config (shared across all screens)
borderRadius: {
  "DEFAULT": "0.5rem",    // 8px  — form inputs, small chips
  "lg":      "1rem",      // 16px — cards, panels
  "xl":      "1.5rem",    // 24px — large cards, modals
  "full":    "9999px",    // pill buttons, avatars, badges
}
```

| Element | Radius |
|---|---|
| Buttons (primary) | `rounded-lg` (8px) or `rounded-full` (pill) |
| Buttons (secondary) | `rounded-lg` |
| Cards / Panels | `rounded-xl` (16px) |
| Large hero / dropzone | `rounded-3xl` |
| Form inputs, selects | `rounded-lg` or `rounded-xl` |
| Avatar / profile images | `rounded-full` |
| Badges / chips | `rounded-full` |

---

## 6. Shadows & Elevation

| Level | Class | Usage |
|---|---|---|
| Subtle card | `shadow-sm` | Default card state |
| Hover elevation | `shadow-xl` | Card on hover |
| Colored glow | `shadow-lg shadow-primary/20` | Primary CTA buttons |
| Sticky header blur | `backdrop-blur-sm` / `backdrop-blur-md` | Navbar overlay |

---

## 7. Icons

**Library:** Google Material Symbols Outlined

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

```html
<!-- Usage pattern -->
<span class="material-symbols-outlined">icon_name</span>

<!-- Filled variant -->
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">icon_name</span>
```

### Icon Sizing Classes

| Size | Class |
|---|---|
| Small (inline) | `text-sm` |
| Default | (default ~24px) |
| Medium | `text-2xl` / `text-3xl` |
| Large | `text-4xl` |

### Icon in Colored Container

```html
<!-- Standard icon badge -->
<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
  <span class="material-symbols-outlined">folder</span>
</div>
```

---

## 8. Component Library

### 8.1 Buttons

#### Primary CTA
```html
<button class="bg-primary text-slate-900 font-bold px-8 py-3 rounded-lg
               hover:shadow-lg hover:shadow-primary/20 transition-all
               flex items-center justify-center gap-2">
  <span class="material-symbols-outlined text-lg">cloud_upload</span>
  Save Changes
</button>
```

#### Primary CTA — Pill
```html
<button class="bg-primary text-background-dark font-bold px-10 py-4 rounded-full
               shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
  Leave a Heart
</button>
```

#### Secondary / Ghost
```html
<button class="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700
               font-semibold text-slate-600 dark:text-slate-400
               hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
  Cancel
</button>
```

#### Soft Primary (tinted)
```html
<button class="bg-primary/10 hover:bg-primary text-slate-900 dark:text-white
               dark:hover:text-background-dark font-bold py-3 px-6 rounded-lg transition-all">
  Select Template
</button>
```

#### Danger (icon button)
```html
<button class="bg-red-500/90 p-2 rounded-lg hover:bg-red-500 transition-colors">
  <span class="material-symbols-outlined text-white text-sm">delete</span>
</button>
```

---

### 8.2 Navigation — Sidebar

```html
<aside class="w-64 border-r border-slate-200 dark:border-slate-800
              bg-white dark:bg-background-dark flex flex-col h-full">
  <!-- Logo / Brand -->
  <div class="p-6 flex items-center gap-3">
    <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
      <span class="material-symbols-outlined">auto_awesome</span>
    </div>
    <h2 class="text-lg font-bold tracking-tight">Sweet Memories</h2>
  </div>

  <!-- Nav links -->
  <nav class="flex-1 px-4 space-y-2">
    <!-- Inactive link -->
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-xl
                       text-slate-600 dark:text-slate-400
                       hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span class="material-symbols-outlined">dashboard</span>
      <span class="text-sm font-medium">Dashboard</span>
    </a>

    <!-- Active link -->
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-xl
                       bg-primary text-background-dark font-semibold">
      <span class="material-symbols-outlined">cloud_upload</span>
      <span class="text-sm">Uploads</span>
    </a>
  </nav>
</aside>
```

---

### 8.3 Header / Navbar

```html
<!-- Admin sticky header -->
<header class="h-16 border-b border-slate-200 dark:border-slate-800
               bg-white/50 dark:bg-black/20 backdrop-blur-sm
               flex items-center justify-between px-8 sticky top-0 z-50">
  <!-- Search -->
  <div class="relative flex-1 max-w-md">
    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
    <input type="text" placeholder="Search..."
           class="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800
                  border-none rounded-xl focus:ring-2 focus:ring-primary text-sm"/>
  </div>

  <!-- Actions -->
  <div class="flex items-center gap-4">
    <button class="size-10 flex items-center justify-center rounded-xl
                   hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
      <span class="material-symbols-outlined">notifications</span>
    </button>
    <!-- Avatar -->
    <div class="size-10 rounded-full bg-primary/20 border border-primary/30"></div>
  </div>
</header>
```

---

### 8.4 Cards

#### Standard Content Card
```html
<div class="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800
            p-6 shadow-sm">
  <!-- content -->
</div>
```

#### Category / Media Card (with hover overlay)
```html
<div class="group bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700
            overflow-hidden shadow-sm hover:shadow-xl transition-all">
  <div class="h-48 overflow-hidden relative">
    <!-- Hover action overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity z-10
                flex items-end p-4 justify-between">
      <button class="bg-white/90 p-2 rounded-lg hover:bg-white">
        <span class="material-symbols-outlined text-slate-700 text-sm">edit</span>
      </button>
      <button class="bg-red-500/90 p-2 rounded-lg hover:bg-red-500">
        <span class="material-symbols-outlined text-white text-sm">delete</span>
      </button>
    </div>
    <div class="w-full h-full bg-cover bg-center" style="background-image: url(...)"></div>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-bold">Category Name</h3>
    <p class="text-sm text-slate-500 font-medium mt-1">124 Photos</p>
    <div class="mt-4 flex gap-2">
      <button class="flex-1 bg-slate-100 dark:bg-slate-700 text-xs font-bold py-2 px-3 rounded-lg
                     hover:bg-primary hover:text-slate-900 transition-colors">View All</button>
    </div>
  </div>
</div>
```

#### Template Card (selectable)
```html
<div class="group bg-white dark:bg-slate-900/50 border border-primary/10 rounded-xl overflow-hidden
            shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
  <div class="aspect-video w-full bg-slate-100 relative">
    <!-- Quick preview overlay -->
    <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100
                transition-opacity flex items-center justify-center">
      <button class="bg-white text-background-dark font-bold px-4 py-2 rounded-lg text-sm
                     shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
        Quick Preview
      </button>
    </div>
    <!-- Popular badge -->
    <div class="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1
                rounded-full text-[10px] font-black uppercase tracking-wider">
      Most Popular
    </div>
  </div>
  <div class="p-6">
    <h3 class="text-lg font-bold mb-2">Template Name</h3>
    <p class="text-sm text-slate-500">Short description.</p>
    <button class="w-full mt-4 bg-primary text-background-dark font-black py-3 rounded-lg
                   transition-all flex items-center justify-center gap-2">
      Select Template
    </button>
  </div>
</div>
```

#### Add New (Dashed placeholder)
```html
<button class="group bg-slate-100/50 dark:bg-slate-800/30 rounded-xl border-2 border-dashed
               border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center
               p-8 min-h-[320px] hover:border-primary hover:bg-primary/5 transition-all">
  <div class="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center
              shadow-md text-primary group-hover:scale-110 transition-transform">
    <span class="material-symbols-outlined text-4xl">add</span>
  </div>
  <p class="mt-4 text-lg font-bold text-slate-600 dark:text-slate-300">Add Category</p>
  <p class="text-sm text-slate-400 mt-1">Create a new collection</p>
</button>
```

---

### 8.5 Form Inputs

#### Text Input
```html
<div class="flex flex-col gap-2">
  <label class="text-sm font-medium text-slate-700 dark:text-slate-300">Label</label>
  <input type="text"
         class="w-full rounded-xl border border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                focus:ring-2 focus:ring-primary focus:border-primary
                px-4 py-3 text-sm"/>
</div>
```

#### Select / Dropdown
```html
<div class="relative">
  <select class="w-full appearance-none bg-white dark:bg-slate-900
                 border border-slate-200 dark:border-slate-800 rounded-xl
                 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary">
    <option>Option 1</option>
  </select>
  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2
               pointer-events-none text-slate-400">expand_more</span>
</div>
```

#### Textarea
```html
<textarea rows="4" placeholder="Tell the story..."
          class="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-700
                 bg-background-light dark:bg-background-dark
                 focus:ring-primary focus:border-primary placeholder:italic">
</textarea>
```

#### Toggle Switch
```html
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" checked/>
  <div class="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700
              peer-checked:after:translate-x-full peer-checked:after:border-white
              after:content-[''] after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:border after:rounded-full after:h-5 after:w-5
              after:transition-all peer-checked:bg-primary">
  </div>
</label>
```

#### Checkbox (custom)
```html
<label class="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700
              hover:bg-primary/5 cursor-pointer transition-colors">
  <input type="checkbox" checked class="rounded text-primary focus:ring-primary h-5 w-5"/>
  <div class="flex flex-col">
    <span class="font-medium">Item Name</span>
    <span class="text-xs text-slate-500">Subtitle / metadata</span>
  </div>
</label>
```

---

### 8.6 Stats / KPI Cards

```html
<div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700
            shadow-sm flex items-center gap-4">
  <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
    <span class="material-symbols-outlined">folder</span>
  </div>
  <div>
    <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Categories</p>
    <p class="text-2xl font-black">12</p>
  </div>
</div>
```

---

### 8.7 Upload Dropzone

```html
<div class="border-2 border-dashed border-primary/30 bg-primary/5 rounded-3xl
            p-12 text-center flex flex-col items-center justify-center
            transition-all hover:border-primary hover:bg-primary/10 group cursor-pointer">
  <div class="size-20 bg-primary rounded-full flex items-center justify-center mb-6
              shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
    <span class="material-symbols-outlined text-background-dark text-4xl">upload_file</span>
  </div>
  <h2 class="text-xl font-bold mb-2">Drag and drop photos here</h2>
  <p class="text-slate-500 max-w-sm mb-8 text-sm">Supports JPG, PNG, HEIC up to 50MB each.</p>
  <button class="bg-primary hover:bg-primary/90 text-background-dark font-bold px-8 py-3
                 rounded-xl transition-all shadow-md">Browse Computer</button>
</div>
```

---

### 8.8 Upload Progress Item

```html
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
            rounded-2xl p-4 shadow-sm">
  <div class="flex items-center gap-4 mb-3">
    <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center">
      <span class="material-symbols-outlined text-primary">image</span>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex justify-between items-start">
        <p class="text-sm font-bold truncate">filename.jpg</p>
        <span class="text-xs font-bold text-primary">65%</span>
      </div>
      <p class="text-xs text-slate-400">4.2 MB / 6.5 MB</p>
    </div>
    <button class="text-slate-400 hover:text-red-500 transition-colors">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
  <!-- Progress bar -->
  <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
    <div class="bg-primary h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(110,230,25,0.4)]"></div>
  </div>
</div>
```

---

### 8.9 Toast Notification

```html
<div class="fixed bottom-6 right-6 flex items-center gap-3
            bg-slate-900 text-white px-4 py-3 rounded-lg shadow-2xl z-50">
  <span class="material-symbols-outlined text-primary">check_circle</span>
  <span class="text-sm">Auto-saved 2 mins ago</span>
</div>
```

<div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-start gap-4">
  <span class="material-symbols-outlined text-primary">info</span>
  <div>
    <p class="text-sm font-bold">Pro Tip</p>
    <p class="text-xs text-slate-500 dark:text-slate-400">
      Sweet Memories automatically detects faces and locations.
    </p>
  </div>
</div>
```

---

### 8.11 Section Header with Form Actions

```html
<div class="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mb-6">
  <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
    <span class="material-symbols-outlined text-primary">style</span>
    Section Title
  </h3>
  <!-- Section content -->
</div>
```

---

### 8.12 Profile Mini (Sidebar Footer)

```html
<div class="p-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
  <div class="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 flex items-center gap-3">
    <div class="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
         style="background-image: url(...)"></div>
    <div class="flex-1 min-w-0">
      <p class="text-xs font-bold truncate">Alex Rivera</p>
      <p class="text-[10px] text-slate-500 truncate">Admin Account</p>
    </div>
  </div>
</div>
```

---

## 9. Layout Patterns

### Admin Dashboard Layout (Sidebar + Main)

```html
<div class="flex h-screen overflow-hidden">
  <aside class="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col
                bg-white dark:bg-background-dark h-full">
    <!-- Sidebar content -->
  </aside>
  <main class="flex-1 flex flex-col overflow-hidden">
    <header class="h-16 ..."><!-- sticky header --></header>
    <div class="flex-1 overflow-y-auto p-8">
      <!-- scrollable content -->
    </div>
  </main>
</div>
```

### Centered Single-Column Layout (Settings / Config)

```html
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
  <header class="sticky top-0 z-50 ..."><!-- top nav --></header>
  <main class="px-6 py-8 md:px-20 lg:px-40 flex-1">
    <div class="max-w-[800px] mx-auto">
      <!-- form content -->
    </div>
  </main>
</div>
```

### Public Site Layout (Full Width)

```html
<div class="flex h-auto min-h-screen flex-col">
  <header class="sticky top-0 z-50 px-6 md:px-20 py-4 backdrop-blur-md">
    <!-- public nav -->
  </header>
  <main class="flex flex-1 flex-col items-center">
    <div class="w-full max-w-[1100px] px-4 md:px-10 py-8">
      <!-- public content -->
    </div>
  </main>
  <footer><!-- footer --></footer>
</div>
```

---

## 10. Grid Systems

| Layout | Grid | Gap |
|---|---|---|
| Template selection | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | `gap-8` |
| Category grid | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` | `gap-6` |
| Hero image picker | `grid-cols-2 sm:grid-cols-4` | `gap-4` |
| KPI stats row | `grid-cols-1 md:grid-cols-4` | `gap-6` |
| Upload config | `grid-cols-1 md:grid-cols-2` | `gap-6` |
| Settings sections | `grid-cols-1 md:grid-cols-3` | `gap-8` |
| Public gallery featured | `grid-cols-1 md:grid-cols-12` | `gap-6` |
| Public photo strip | `grid-cols-2 md:grid-cols-4` | `gap-4` |

---

## 11. Interaction & Animation

| Type | Value | Notes |
|---|---|---|
| **Default transition** | `transition-all` | Most interactive elements |
| **Color-only transition** | `transition-colors` | Buttons, nav links |
| **Duration fast** | `duration-200` | Hover states |
| **Duration medium** | `duration-300` | Card hovers |
| **Duration slow** | `duration-500` / `duration-700` | Image zoom on public site |
| **Scale up on hover** | `hover:scale-105` | CTA buttons |
| **Scale active press** | `active:scale-95` | Primary buttons |
| **Image zoom** | `group-hover:scale-110` | Category thumbnails |
| **Slide in overlay** | `translate-y-2 group-hover:translate-y-0` | Template preview button |
| **Opacity fade** | `opacity-0 group-hover:opacity-100` | Card hover overlays |
| **Spinner** | `animate-spin border-t-transparent` | Upload processing |

---

## 12. Z-Index Scale

| Layer | Value | Usage |
|---|---|---|
| Base content | 0 | Normal flow |
| Card overlays | `z-10` | Hover overlays on cards |
| Badges | `z-20` | Category badges over images |
| Sticky header | `z-50` | Top nav / sidebar |
| Toast / Notifications | `z-50` | Fixed-position toasts |

---

## 13. Dark Mode

- Enabled via Tailwind `darkMode: "class"` — toggled by adding `dark` class to `<html>`
- All components must include dark variants using `dark:` prefix
- Background shifts: `bg-white` → `dark:bg-slate-900/50` or `dark:bg-slate-800`
- Borders: `border-slate-200` → `dark:border-slate-800`
- Text: `text-slate-900` → `dark:text-slate-100`

---

## 14. Responsive Breakpoints (Tailwind defaults)

| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Show 2-col grids, hide some labels |
| `md` | 768px | Show sidebar, 3-col grids, wider padding |
| `lg` | 1024px | Max padding (`lg:px-40`), 4-col grids |
| `xl` | 1280px | 4-col category grid |

---

## 15. Accessibility

- All form inputs must have a `<label>` or `aria-label`
- Icon-only buttons must have `aria-label`
- Images must have descriptive `alt` text (use `data-alt` for placeholder pattern)
- Sticky headers must not cover focused content — account for `z-50` stacking
- Focus rings: `focus:ring-2 focus:ring-primary` on all interactive inputs
- Minimum touch target: 44×44px (`size-10` = 40px — pad to meet 44px where needed)
- Color contrast: primary `#6ee619` on `#182111` passes WCAG AA for large text; verify on light backgrounds

---

## 16. Page Inventory

| Page File | Route (conceptual) | Role |
|---|---|---|
| `choose_template/code.html` | `/admin/templates` | Admin — pick a book template |
| `manage_categories/code.html` | `/admin/categories` | Admin — CRUD photo categories |
| `upload_photos/code.html` | `/admin/uploads` | Admin — upload & organize photos |
| `template_configuration/code.html` | `/admin/configure` | Admin — configure published book |
| `settings/code.html` | `/admin/settings` | Admin — site title, subdomain, privacy |
| `public_memory_book/code.html` | `/{subdomain}.memories.com` | Public — shareable memory book |

---

## 17. CSS Custom Properties (Design Tokens)

Use these CSS variables as an alternative to Tailwind utilities when working in vanilla CSS or building a token layer:

### Color Variables

```css
:root {
  --color-primary:     #6ee619;  /* Vibrant lime-green */
  --color-bg-light:    #f7f8f6;  /* Light mode page background */
  --color-bg-dark:     #182111;  /* Dark mode page background */
  --color-text:        #0f172a;  /* slate-900 — primary text */
  --color-text-muted:  #64748b;  /* slate-500 — secondary text */
  --color-surface:     #ffffff;  /* Card / panel background (light) */
  --color-border:      #e2e8f0;  /* slate-200 — default border */
}
```

### Spacing Variables

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `4px / 0.25rem` | Tight gaps, icon padding |
| `--space-sm` | `8px / 0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px / 1rem` | Standard padding |
| `--space-lg` | `24px / 1.5rem` | Section padding, card gaps |
| `--space-xl` | `32px / 2rem` | Large gaps, page sections |
| `--space-2xl` | `48px / 3rem` | Section margins |
| `--space-3xl` | `64px / 4rem` | Hero padding |

### Shadow Variables

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |
| `--shadow-primary` | `0 10px 15px rgba(110,230,25,0.2)` | Primary CTA glow |

---

## 18. Component CSS Specs (Vanilla / Non-Tailwind Reference)

These canonical specs describe component intent. Tailwind equivalents are documented in Section 8.

### Modal

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;   /* rounded-xl */
  padding: 32px;          /* p-8 */
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## 19. Page Pattern

**Pattern:** Hero + Content Sections + CTA

| Step | Section |
|---|---|
| 1 | Hero (full-bleed image with overlay title) |
| 2 | Intro / Story description |
| 3 | Tabbed gallery sections (chapters) |
| 4 | Engagement CTA ("Leave a Heart") |

- **CTA Placement:** Hero area (button) + bottom engagement section
- **Conversion Strategy:** Emotional story content before engagement CTA
- **Testimonials equivalent:** Heart count ("128 family members have already left a heart")

---

## 20. Anti-Patterns (Do NOT Use)

| # | Anti-Pattern | Correct Approach |
|---|---|---|
| 1 | Emojis as UI icons | Use Material Symbols Outlined SVG |
| 2 | Missing `cursor-pointer` | Add to every clickable card, button, label |
| 3 | Layout-shifting hovers (scale on layout-affecting elements) | Use `opacity`, `shadow`, or `color` transitions |
| 4 | Low contrast text in light mode | Minimum 4.5:1 ratio; use `slate-700+` for body |
| 5 | Instant state changes (no transition) | Always `transition-colors` or `transition-all` 150–300ms |
| 6 | Invisible focus states | `focus:ring-2 focus:ring-primary` on all inputs |
| 7 | Glass cards with near-invisible opacity in light mode | Use `bg-white/80` or higher |
| 8 | Fixed navbars overlapping content | Account for `h-16` header height in layout |
| 9 | Mixed container widths | Stick to `max-w-[800px]` (admin) / `max-w-[1100px]` (public) |
| 10 | Inconsistent icon sets | Material Symbols Outlined only — no mixing |

---

## 21. Pre-Delivery Checklist

Before shipping any page or component, verify all items:

### Visual Quality
- [ ] No emojis used as icons — Material Symbols Outlined only
- [ ] All icons use consistent sizing (`text-sm` / default / `text-3xl`)
- [ ] Hover states don't cause layout shift
- [ ] Primary color `#6ee619` used — not guessed variants

### Interaction
- [ ] `cursor-pointer` on all clickable elements (buttons, cards, labels)
- [ ] Hover states give clear visual feedback
- [ ] Transitions smooth at 150–300ms
- [ ] Active/press states: `active:scale-95` on primary CTAs

### Light / Dark Mode
- [ ] Light mode text contrast ≥ 4.5:1
- [ ] Borders visible in light mode (`border-slate-200`)
- [ ] Card surfaces visible in dark mode (`dark:bg-slate-800`)
- [ ] Both modes tested before delivery

### Layout
- [ ] Content not hidden behind sticky header (`h-16`)
- [ ] No horizontal scroll on mobile
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Sidebar width `w-64` or `w-72` consistent

### Accessibility
- [ ] All `<img>` have descriptive `alt` attributes
- [ ] Form `<input>` and `<select>` have `<label>`
- [ ] Icon-only buttons have `aria-label`
- [ ] Focus rings visible: `focus:ring-2 focus:ring-primary`
- [ ] `prefers-reduced-motion` respected for animations

---

*Last updated: Merged from HTML prototype analysis + auto-generated design tokens — February 2026*
