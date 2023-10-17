/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com/",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f218a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dxkvem7qh", // CHECK!! https://console.cloudinary.com/console/c-0dd466c1e9b508fafe628fad55b216
		NEXT_CLOUDINARY_PRESET: "vikings",
	},
};

module.exports = nextConfig;
