"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import routeSquare from "../../../public/images/icon/route-square.svg";
import shp1 from "../../../public/images/shape-1.png";
import shp2 from "../../../public/images/shape-2.png";
import Input from "../FormHelpers/Input";

const Subscribe = ({currentUser, haveSubscript} ) => {
	const [isLoading, setIsLoading] = useState(false);
	console.log(currentUser.email, haveSubscript)

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (data) => {
		data.email = currentUser.email;
		setIsLoading(true);
		axios
			.post("/api/subscription", data)
			.then((response) => {
				toast.success("Subscription created!");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="subscribe-area">
			<div className="container">
				<div className="subscribe-bg">
					<div className="subscribe-content">
						<h2>
							Sign Up To Get Special Offer Everyday Through Mail
						</h2>

						<div className="newsletter-wrap">
							<form
								className="newsletter-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								{/* <Input
									id="email"
									placeholder="Valid Email Address"
									disabled={isLoading}
									register={register}
									errors={errors}
									type="email"
									required
								/> */}
							{currentUser ?  							
							<button
									className="default-btn"
									type="submit"
									disabled={isLoading}
								>
									Subscribe Now
								</button>:
								<Link href="/auth/signup"><button className="default-btn">Register</button></Link>
							}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
