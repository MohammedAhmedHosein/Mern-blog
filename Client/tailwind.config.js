import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ], // Correct path for Flowbite],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
