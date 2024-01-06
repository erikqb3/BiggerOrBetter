import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Authentication faild!" },
			{ status: 401 }
		);
	}

	const body = await request.json();

	// const { myHistory } = body;

	// let profile = await prisma.user.update({
	// 	where: {
	// 		id: currentUser.id,
	// 	},
	// 	data: {
	// 		myHistory
	// 	},
	// });

	listings = await prisma.listing.findUnique({
		where: {
			category: category,
		},
		orderBy: {
			created_at: "desc",
		},
		include: {
			user: {
				select: {
					name: true,
					id: true,
				},
			},
		},
	});

	return NextResponse.json(profile);
}
