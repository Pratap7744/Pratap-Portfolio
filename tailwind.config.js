/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './app.vue',
      './error.vue',
      './nuxt.config.{js,ts}'
    ],
    theme: {
      extend: {
        colors: {
          green: {
            50: '#f4f3f2',
            100: '#e4e2dd',
            200: '#ccc6bc',
            300: '#aea396',
            400: '#968879',
            500: '#8f7f70',
            600: '#74655a',
            700: '#5e514a',
            800: '#514642',
            900: '#483d3b',
            950: '#282120'
          }
        }
      }
    },
    plugins: []
  };