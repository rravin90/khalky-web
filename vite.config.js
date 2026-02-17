export default {
  server: {
    host: true,
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
}