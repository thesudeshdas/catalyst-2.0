/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1': '1 / 1'
      }
    }
  },
  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          '--rounded-box': '0.375rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.375rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '0.375rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.375rem' // border radius of tabs
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          '--rounded-box': '0.375rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.375rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '0.375rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.375rem' // border radius of tabs
        }
      }
    ]
  },
  theme: {
    transitionDuration: {
      DEFAULT: '300ms'
    },
    extend: {
      fontSize: {
        xxs: '11px'
      },
      gridTemplateColumns: {
        timeline: '0 auto 5fr',
        'timeline-sm': '80px auto 1fr'
      }
    }
  }
};
