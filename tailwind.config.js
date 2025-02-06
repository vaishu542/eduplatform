/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeCol: '#ff6600',
        blueCol: '#007bff',
        ash: '#333',
        lightash: '#666',
      },
      boxShadow: {
        shadowcustom: "0 4px 8px #0000001a",
        imgShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #f39c12, #e74c3c)',
        'purple-gradient': 'linear-gradient(135deg, #fbc2eb 10%, #a6c1ee 100%)',
        'orange-gradient': 'linear-gradient(135deg, #ff6600 10%, #ff3d00 100%)',
        'blue-gradient': 'linear-gradient(to right, #007bff, #00d1b2)',
      },
    },
  },
  plugins: [],
}