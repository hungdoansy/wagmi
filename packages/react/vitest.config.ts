import path from 'path'
import { defineProject } from 'vitest/config'

// https://vitest.dev/config/
export default defineProject({
  resolve: {
    alias: {
      '@wagmi/core': path.resolve(__dirname, '../core/src/exports'),
      '@wagmi/connectors': path.resolve(__dirname, '../connectors/src'),
      '@wagmi/test': path.resolve(__dirname, '../test/src/exports'),
    },
  },
  test: {
    name: 'wagmi',
    environment: 'jsdom',
    testTimeout: 10_000,
    setupFiles: ['./test/setup.ts'],
  },
})
