/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {



      colors:{

        navColor:"#314584",
        btnColor:"#ff3946",
        pColor:"#6e757a"
      },
      fontSize:{

        navSize:"24px",
        titleSize:"74px",
        pSize:"18px"
      },

      fontFamily:{

        fontNav:["Work Sans"]
      }
    },
  },
  plugins: [],
}
