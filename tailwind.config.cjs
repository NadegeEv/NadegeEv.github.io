/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
			  mytheme: {
				"primary": "#495867",
				"secondary": "#495867", // badge color + timeline color
				"accent": "#be7c4d",
				"neutral": "#130102",
				"base-100": "#d5d6aa", // font color
				"base-200": "#495867", // networks color + degrade
				"base-300": "#9dbbae", // selected section color
			  },
			},
			"light",
			"dark",
			"cupcake",
		  ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
