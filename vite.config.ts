
import path from 'path'

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/passwordGenerator.ts'),
      name: 'Password-Generator',
    },
    rollupOptions: {
      external: ['passwordGenerator.ts']
    },
    emptyOutDir: false
  }
}
