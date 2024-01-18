import Banner from "@/components/Index/Banner";
import Blog from "@/components/Index/Blog";
import Category from "@/components/Index/Category";
import Favour from "@/components/Index/Favour";
import Featured from "@/components/Index/Featured";
import Traders from "@/components/Index/Traders";
import Partner from "@/components/Index/Partner";
import Subscribe from "@/components/Index/Subscribe";
import Suggestions from "@/components/Index/Suggestions";
import Testimony from "@/components/Index/Testimony";
import OtherTraders from "@/components/Index/OtherTraders";
import WorkArea from "@/components/Index/WorkArea";
import RecentViewings from "@/components/Index/RecentViewings";
import { getCurrentUser } from "@/actions/getCurrentUser";
// import getBlogPosts from "@/actions/getBlogPosts";
import getAllUsers from "@/actions/getAllUser";
import getSubscriptionByEmail from "@/actions/getSubscriptionByEmail";


export const dynamic = "force-dynamic";
const limitParams = { limit: 6 };
export default async function Home() {
	const currentUser = await getCurrentUser();
	// const haveSubscript = await getSubscriptionByEmail(currentUser.email);
	// const blogPosts = await getBlogPosts(limitParams);
	const allUsers = await getAllUsers();
	
	console.log(currentUser);

	if (currentUser){
		console.log("Hellow")
	}
	// currentUser.myHistory.reverse().forEach(listing_id => {
		
	// });



	return (
		<>
			<Banner />

			<RecentViewings currentUser={currentUser}/>
			{/* <Suggestions currentUser={currentUser}/>
			<Featured currentUser={currentUser} />
			<Traders allUsers={allUsers}/>
			<Subscribe currentUser={currentUser} haveSubscript={haveSubscript}/> */}



			{/* <Category /> */}
			{/* <OtherTraders allUsers={allUsers}/> */}
			{/* <WorkArea /> */}
			{/* <Testimony /> */}
			{/* <Favour /> */}
			{/* <Partner /> */}
			{/* <Blog blogPosts={blogPosts} /> */}
		</>
	);
}
