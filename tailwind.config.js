/** @type {import('tailwindcss').Config} */
export default {
  content: [
            "./index.html",
            "./src/**/*.js"
          ],
  theme: {
    extend: {
      fontSize: {
        "custom-font-size" : "32px"
      },
      fontFamily:{
        "sans": "'League Spartan', sans-serif"
      },
      borderColor: {
        "theme-1-key-shadow": "hsl(224, 28%, 35%)",
        "theme-1-key-shadow-2": "hsl(28, 16%, 65%)",
        "theme-1-key-shadow-3": "hsl(6, 70%, 34%)"
      },

      textColor: {
        "theme-1-key-shadow": "hsl(224, 28%, 35%)",
        "theme-1-key-shadow-2": "hsl(28, 16%, 65%)",
        "theme-1-text": "hsl(221, 14%, 31%)",
        "theme-2-key-shadow-1": "hsl(185, 58%, 25%)",
        "theme-2-key-shadow-2": "hsl(25, 99%, 27%)",
        "theme-2-key-shadow-3": "hsl(35, 11%, 61%)",
        "theme-2-text": "hsl(60, 10%, 19%)",
        "theme-3-key-shadow-1": "hsl(285, 91%, 52%)",
        "theme-3-key-shadow-2": "hsl(177, 92%, 70%)",
        "theme-3-key-shadow-3": "hsl(290, 70%, 36%)",
        "theme-3-text-1": "hsl(52, 100%, 62%)",
        "theme-3-text-2": "hsl(198, 20%, 13%)"
      },
      backgroundColor: {
        "theme-1-main": "hsl(222, 26%, 31%)",
        "theme-1-toggle-bg": "hsl(223, 31%, 20%)",
        "theme-1-toggle-btn": "hsl(6, 63%, 50%)",
        "theme-1-screen": "hsl(224, 36%, 15%)",
        "theme-1-key-bg-1": "hsl(225, 21%, 49%)",
        "theme-1-key-bg-2": "hsl(30, 25%, 89%)",
        "theme-2-main": "hsl(0, 0%, 90%)",
        "theme-2-toggle": "hsl(0, 5%, 81%)",
        "theme-2-toggle-btn": "hsl(25, 98%, 40%)",
        "theme-2-screen": "hsl(0, 0%, 93%)",
        "theme-2-key-bg-1": "hsl(185, 42%, 37%)",
        "theme-2-key-bg-2": "hsl(25, 98%, 40%)",
        "theme-2-key-bg-3": "hsl(45, 7%, 89%)",
        "theme-3-main": "hsl(268, 75%, 9%)",
        "theme-3-toggle": "hsl(268, 71%, 12%)",
        "theme-3-toggle-btn": "hsl(176, 100%, 44%)",
        "theme-3-key-bg-1": "hsl(281, 89%, 26%)",
        "theme-3-key-bg-2": "hsl(176, 100%, 44%)",
        "theme-3-key-bg-3": "hsl(268, 47%, 21%)",
      }
    },
  },
  plugins: [],
}

