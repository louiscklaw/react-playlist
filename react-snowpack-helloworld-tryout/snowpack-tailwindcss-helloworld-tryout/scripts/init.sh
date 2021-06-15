yarn add --dev tailwindcss @snowpack/plugin-postcss postcss postcss-cli


# // postcss.config.js
# module.exports = {
#   plugins: {
#     tailwindcss: {},
#     // other plugins can go here, such as autoprefixer
#   },
# };


# // tailwind.config.js
# module.exports = {
#   mode: 'jit',
#   purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
#   // specify other options here
# };


#   // snowpack.config.mjs
#   export default {
#     mount: {
#       src: '/_dist',
#       public: '/',
#     },
# +   devOptions: {
# +     tailwindConfig: './tailwind.config.js',
# +   },
# +   plugins: [
# +     '@snowpack/plugin-postcss',
# +   ],
#   };


# /public/global.css
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
