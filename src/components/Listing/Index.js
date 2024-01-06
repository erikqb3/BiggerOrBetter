"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DetailsHead from "./DetailsHead";
import RightSidebar from "./RightSidebar";
import FeedbackForm from "./FeedbackForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import Reviews from "./Reviews";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const MapWithNoSSR = dynamic(() => import("../Map"), {
	ssr: false,
});
import Features from "./Features";
import SahreAndSave from "./SahreAndSave";
import DetailsImages from "./DetailsImages";


const Index = ({ currentUser, listing, reviews }) => {
	let myHistory_string = currentUser.myHistory;
	let myHistory_array = myHistory_string.split(",")
	let clear = true;

	// 1) Check if History Exists
	if (currentUser){
		if (!myHistory_string){
			myHistory_string = "";
		}
		// 1a)If Exists, add comma at the end for syntax and order
		else {
			myHistory_string = myHistory_string + ",";
		}

		//  2) Loop through and check for current viewing is in history already
		myHistory_array.forEach(listItem => {
			if (listItem == listing.id){
				clear = false;
			}
		});

		if (clear == true){
			// 3a) if current history is 10, remove 1
			if (myHistory_array.length >= 10){
				myHistory_array.shift();
				myHistory_array.toString();
				myHistory_string = myHistory_array + ","
			}

			// 3b) add current viewing to existing history
			myHistory_string = myHistory_string + listing.id;
			let data = {"myHistory": myHistory_string};

			// 4) update myHistory
			axios
			.post(`/api/users/${currentUser.id}/myHistory`, data)
			.then((response) => {
				toast.success("Information updated!");

			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})

		}
		else {
			// console.log("Listing Not Added")
		}
	}
	
	
	


	return (
		<div className="listing-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="listing-details-content">
							<DetailsHead {...listing} />

							<DetailsImages {...listing} />

							<div className="tag-sheare d-flex justify-content-between">
								<ul className="tags-list">
									<li>
										<Link
											href={`/listings/?category=${listing.category}`}
										>
											{listing.category}
										</Link>
									</li>
								</ul>

								<SahreAndSave
									currentUser={currentUser}
									listingId={listing.id}
								/>
							</div>

							<div
								dangerouslySetInnerHTML={{
									__html: listing.description,
								}}
								className="listing-details-box"
							/>

							<Features {...listing} />

							{listing && (
								<MapWithNoSSR
									latitude={listing.latitude}
									longitude={listing.longitude}
								/>
							)}

							<Reviews reviews={reviews} />

							<FeedbackForm
								currentUser={currentUser}
								listingId={listing.id}
							/>
						</div>
					</div>

					<RightSidebar {...listing} />
				</div>
			</div>
		</div>
	);
};

export default Index;
