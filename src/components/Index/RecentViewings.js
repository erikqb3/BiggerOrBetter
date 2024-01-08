"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import FeaturedItem from "./FeaturedItem";
import { toast } from "react-hot-toast";
// import getListingById from "@/actions/getListingById";

const RecentViewings = ({ currentUser }) => {
	const [listings, setListings] = useState([]);
	const [myHistory_listings, setMyHistory_listings] = useState([]);
	// let myHistory = currentUser.myHistory;
	let myHistory_array = currentUser.myHistory.split(",").reverse();
 let smallArray = [];
	useEffect(() => {

	// const [cat, setCat] = useState("all");



		const fetchData = async () => {
			await axios
				.get(`/api/listings/featured?category=all`)
				.then((response) => {
					setListings(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
				});
		};


		
		// const fetchData = async () => {
			// await myHistory_array.forEach(id => {
			// 	axios
			// 		.get(`/api/listings/myHistory/${id}`)
			// 		.then((response) => {
			// 			console.log(response)
			// 			setMyHistory_listings(myHistoryresponse.data);
			// 		})
			// 		.catch((error) => {
			// 			toast.error("Something went wromg!");
			// 		});

			// });
		// };


		// myHistory_array.forEach(id => {
		// 	console.log("Hellow")

		// 	// consolog(getListingById(id));	
		// 	// myHistory_listings.push(
		// 	//  axios
		// 	// 	.get(`/api/listings/myHistory`, id)
		// 	// 	.then((response) => {
		// 	// 		setListings(response.data);
		// 	// 	})
		// 	// 	.catch((error) => {
		// 	// 		toast.error("Something went wromg!");
		// 	// 	})
		// 	// )
		// });
		
		console.log("Hellow")
		
		fetchData();
	}, []);
	
	
	console.log(
		listings,
		myHistory_array
	)
	

	const getFeatured = async (cat) => {
		setCat(cat);
		await axios
			.get(`/api/listings/featured?category=${cat}`)
			.then((response) => {
				setListings(response.data);
			})
			.catch((error) => {
				toast.error("Something went wromg!");
			});
	};
	
	return (
		<div className="offer-area bg-color-fffcf8">
			<div className="container">
				<div className="section-title-wrap">
					<div className="section-title left-title">
						<h2>Recent Viewings</h2>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="tab-content">
					<div className="tab-pane fade show active">
						<Swiper 
							spaceBetween={15}
							grabCursor={true}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								0: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 4,
								},
								1200: {
									slidesPerView: 6,
								},
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="featured-slide"
						>
							{listings.length > 0 &&
								listings.map((list) => (
									<SwiperSlide key={list.id}>
										<FeaturedItem
											currentUser={currentUser}
											{...list}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentViewings;
