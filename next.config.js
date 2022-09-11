/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		additionalData: `@import "src/styles/theme.scss";`,
	},
};

module.exports = nextConfig;
