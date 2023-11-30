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
      }
    }
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          borderColor: {
            "key-shadow": "hsl(224, 28%, 35%)",
            "key-shadow-2": "hsl(28, 16%, 65%)",
            "key-shadow-3": "hsl(6, 70%, 34%)"
          },
          textColor: {
            "key-shadow": "hsl(224, 28%, 35%)",
            "key-shadow-2": "hsl(28, 16%, 65%)",
            "text": "hsl(221, 14%, 31%)",
          },
          backgroundColor: {
            "main": "hsl(222, 26%, 31%)",
            "toggle-bg": "hsl(223, 31%, 20%)",
            "toggle-btn": "hsl(6, 63%, 50%)",
            "screen": "hsl(224, 36%, 15%)",
            "key-bg-1": "hsl(225, 21%, 49%)",
            "key-bg-2": "hsl(30, 25%, 89%)",
          }
        }
      },
      themes: [
        {
          name: "theme-2",
          extend: {
            textColor: {
              "key-shadow-1": "hsl(185, 58%, 25%)",
              "key-shadow-2": "hsl(25, 99%, 27%)",
              "key-shadow-3": "hsl(35, 11%, 61%)",
              "text": "hsl(60, 10%, 19%)"
            },
            backgroundColor: {
              "main": "hsl(0, 0%, 90%)",
              "toggle": "hsl(0, 5%, 81%)",
              "toggle-btn": "hsl(25, 98%, 40%)",
              "screen": "hsl(0, 0%, 93%)",
              "key-bg-1": "hsl(185, 42%, 37%)",
              "key-bg-2": "hsl(25, 98%, 40%)",
              "key-bg-3": "hsl(45, 7%, 89%)"
            },
          }
        },
        {
          name: "theme-3",
          extend: {
            textColor: {
              "key-shadow-1": "hsl(285, 91%, 52%)",
              "key-shadow-2": "hsl(177, 92%, 70%)",
              "key-shadow-3": "hsl(290, 70%, 36%)",
              "text-1": "hsl(52, 100%, 62%)",
              "text-2": "hsl(198, 20%, 13%)"
            },
            backgroundColor: {
              "main": "hsl(268, 75%, 9%)",
              "toggle": "hsl(268, 71%, 12%)",
              "toggle-btn": "hsl(176, 100%, 44%)",
              "key-bg-1": "hsl(281, 89%, 26%)",
              "key-bg-2": "hsl(176, 100%, 44%)",
              "key-bg-3": "hsl(268, 47%, 21%)",
            }
          }
        }
      ]
    })
  ],
}

