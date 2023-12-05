import Banner from "@/components/Index/Banner";
import Blog from "@/components/Index/Blog";
import Category from "@/components/Index/Category";
import Favour from "@/components/Index/Favour";
import Featured from "@/components/Index/Featured";
import Locations from "@/components/Index/Locations";
import Partner from "@/components/Index/Partner";
import Subscribe from "@/components/Index/Subscribe";
import Testimony from "@/components/Index/Testimony";
import OtherTraders from "@/components/Index/OtherTraders";
import WorkArea from "@/components/Index/WorkArea";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getBlogPosts from "@/actions/getBlogPosts";
import getAllUsers from "@/actions/getAllUser";

export const dynamic = "force-dynamic";
const limitParams = { limit: 6 };
export default async function Home() {
	const currentUser = await getCurrentUser();
	const blogPosts = await getBlogPosts(limitParams);
	const allUsers = await getAllUsers();
	// console.log("Hellow Honest!")
	console.log(allUsers);
	return (
		<>
			<Banner />
			{/* <Category /> */}
			<Featured currentUser={currentUser} />
			<Locations />
			<OtherTraders allUsers={allUsers}/>
			{/* <WorkArea /> */}
			<Testimony />
			{/* <Favour /> */}
			{/* <Partner /> */}
			<Subscribe />
			{/* <Blog blogPosts={blogPosts} /> */}
		</>
	);
}
