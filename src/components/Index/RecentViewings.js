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

	
	
	useEffect(() => {
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
		
		fetchData();
	}, []);

	if (currentUser){
		let myHistory_array = currentUser.myHistory.split(",").reverse();
		let smallArray = [];
	
	
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
										slidesPerView: 3,
									},
									1200: {
										slidesPerView: 5,
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

	}
	else{
		return <div></div>
	}
};

export default RecentViewings;
