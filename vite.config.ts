import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/baizhi-zuopinji/' : './',
  build: {
    outDir: 'docs'
  },
  server: {
    allowedHosts: ['.monkeycode-ai.online']
  }
}))
