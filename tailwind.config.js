/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    // backgroundColor: ['active']
  },
  plugins: [
    // require('@tailwindcss/scrollbar'),
    // require('@tailwindcss/scrollbar'),

  ],
  // theme: {
  //   extend: {
  //     scrollbar: {
  //       'track': 'bg-gray-200', // Change the background color of the scrollbar track
  //       'thumb': 'bg-gray-400', // Change the background color of the scrollbar thumb
  //     },
  //   },
  // },
  // variants: {
  //   scrollbar: ['rounded'],
  // },
  // plugins: [
  //   require('tailwind-scrollbar'), // Enable the scrollbar plugin
  // ],
}

