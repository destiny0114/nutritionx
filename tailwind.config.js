module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"lavender": "#e4dfff",
				"medium-slate-blue": "#7165e3",
				"light-purple": "#FBF9FF",
				"liberty": "#4e4c9c",
				"russian-violet": "#2f2850",
				"naples-yellow": "#fada63",
				"light-pink": "#f966f5",
				"sky-blue": "#64daed"
			},
			fontFamily: {
        		'poppins': ["Poppins", "sans-serif"]
      		}
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
};
