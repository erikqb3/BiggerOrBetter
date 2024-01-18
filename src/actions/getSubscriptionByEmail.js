import prisma from "@/libs/prismadb";

export default async function getSubscriptionByEmail(params) {
	console.log
	try {
		const { userEmail } = params;

		const subscription = await prisma.subscription.findUnique({
			where: {
				email: userEmail,
			},
			include: {
				// profile: true,
				// listings: {
				// 	take: 6,
				// },
				// favourites: true,
			},
			// take: 6,
		});

		if (!subscription) {
			return null;
		}

		return subscription;
	} catch (error) {
		return null;
	}
}
