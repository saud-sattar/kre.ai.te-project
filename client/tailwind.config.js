/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{js,jsx}", "./public/index.html"],
   theme: {
      extend: {
         screens: {
            xs: "480px",
         },
         fontFamily: {
            inter: ["Inter var", "sans-serif"],
            mono: ["Consolas"],
         },
         boxShadow: {
            card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
            cardhover:
               "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
         },
         backgroundImage: {
            "logo-gradient":
               "linear-gradient(135deg, #FFD54F, #9C27B0, #42A5F5)",
         },
      },
   },
   plugins: [],
};
