import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import neon from './neon-vite-plugin.ts'

const config = defineConfig({
  plugins: [
    devtools(),
    neon,
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
