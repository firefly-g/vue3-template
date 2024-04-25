/** @type {import('tailwindcss').Config} */
module.exports = {
	important: false,
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				dashbordDataItem4: 'repeat(3, minmax(220px, 1fr))',
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false, // 关闭默认样式
	},
}

